import { createContext, ReactNode, useState } from 'react';

import { Audio } from 'expo-av';

type PlayerContextData = {
  currentSound: CurrentSoundData | null;
  playSound: (data: PlaySoundData) => Promise<void>;
  stopCurrentSound: () => Promise<void>;
  currentPlayingId: string | null;
  isPlaying: boolean;
};

export const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData,
);

type PlaySoundData = {
  id: string;
  title: string;
  uri: string;
};

type CurrentSoundData = {
  title: string;
  sound: Audio.Sound;
};

type Props = {
  children: ReactNode;
};

export function PlayerContextProvider({ children }: Props) {
  const [currentSound, setCurrentSound] = useState<CurrentSoundData | null>(
    null,
  );
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound({ id, uri, title }: PlaySoundData) {
    if (currentSound) {
      setIsPlaying(true);
      await currentSound.sound.stopAsync();
      await currentSound.sound.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync({ uri });
    setCurrentSound({ title, sound: sound });
    setCurrentPlayingId(id);
    setIsPlaying(true);

    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(status => {
      if (!status.isLoaded) {
        if (status.error) {
          //console.log(`Error: ${status.error}`);
        }
      } else {
        if (status.didJustFinish) {
          setCurrentPlayingId(null);
          setIsPlaying(false);
        }
      }
    });
  }

  async function stopCurrentSound() {
    if (currentSound) {
      await currentSound.sound.stopAsync();
      await currentSound.sound.unloadAsync();
      setCurrentSound(null);
      setCurrentPlayingId(null);
      setIsPlaying(false);
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentSound,
        playSound,
        stopCurrentSound,
        currentPlayingId,
        isPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
