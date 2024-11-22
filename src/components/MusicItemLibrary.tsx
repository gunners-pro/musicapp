import { StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Center, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import { EllipsisVertical } from 'lucide-react-native';

import { colors } from '@/constants/tokens';
import { AudioFile } from '@/context/AudioFilesContext';
import { usePlayer } from '@/hooks/usePlayer';
import { convertSecondsToMinutes } from '@/utils/convertSecondsToMinutes';
import { removeExtensionFromNameFile } from '@/utils/removeExtensionFromNameFile';

type Props = {
  item: AudioFile;
};

export function MusicItemLibrary({ item }: Props) {
  const {
    isPlaying,
    playSound,
    checkPlayPauseCurrentSound,
    currentPlayingId,
    animationLottieWave,
    animationLottieWave2,
  } = usePlayer();

  async function handlePlayMusic() {
    if (isPlaying) {
      animationLottieWave.current?.pause();
      animationLottieWave2.current?.pause();
    } else {
      animationLottieWave.current?.play();
      animationLottieWave2.current?.play();
    }

    currentPlayingId === item.id
      ? checkPlayPauseCurrentSound()
      : playSound({ id: item.id, uri: item.uri, title: item.filename });
  }

  return (
    <HStack mb="$5" justifyContent="space-between">
      <TouchableOpacity style={styles.btnPlayAudio} onPress={handlePlayMusic}>
        <HStack gap="$2" alignItems="center">
          <VStack
            w="$16"
            h="$16"
            bg={colors.purple900}
            borderRadius={20}
            justifyContent="center"
          >
            <Center>
              {currentPlayingId === item.id ? (
                <LottieView
                  ref={animationLottieWave2}
                  style={styles.lottieView}
                  source={require('@/assets/lottie/music_wave.json')}
                />
              ) : (
                <Entypo name="controller-play" color="#fff" size={32} />
              )}
            </Center>
          </VStack>
          <VStack flex={1} gap="$1" mx="$2">
            <Text
              fontSize="$md"
              color={colors.purple900}
              numberOfLines={2}
              textAlign="justify"
            >
              {removeExtensionFromNameFile(item.filename)}
            </Text>
            <Text fontSize="$sm" color={colors.textLight}>
              {convertSecondsToMinutes(item.duration)}
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDots}>
        <Icon as={EllipsisVertical} size="lg" />
      </TouchableOpacity>
    </HStack>
  );
}

const styles = StyleSheet.create({
  btnPlayAudio: {
    flex: 1,
  },
  btnDots: {
    justifyContent: 'center',
  },
  lottieView: {
    width: 65,
    height: 65,
  },
});
