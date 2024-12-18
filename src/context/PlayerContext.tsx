import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import { Audio, AVPlaybackStatusSuccess } from 'expo-av';
import LottieView from 'lottie-react-native';

type PlayerContextData = {
  currentSound: CurrentSoundData | null;
  playSound: (data: PlaySoundData) => Promise<void>;
  checkPlayPauseCurrentSound: () => Promise<void>;
  currentPlayingId: string | null;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  animationLottieWave: RefObject<LottieView>;
  animationLottieWave2: RefObject<LottieView>;
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
  const animationLottieWave = useRef<LottieView>(null);
  const animationLottieWave2 = useRef<LottieView>(null);

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

  async function checkPlayPauseCurrentSound() {
    if (currentSound) {
      const status =
        (await currentSound.sound.getStatusAsync()) as AVPlaybackStatusSuccess;
      if (status.isPlaying) {
        setIsPlaying(false);
        await currentSound.sound.pauseAsync();
      } else {
        setIsPlaying(true);
        await currentSound.sound.playAsync();
      }
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentSound,
        playSound,
        checkPlayPauseCurrentSound,
        currentPlayingId,
        isPlaying,
        setIsPlaying,
        animationLottieWave,
        animationLottieWave2,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
