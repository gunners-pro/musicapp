import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { AVPlaybackStatusSuccess } from 'expo-av';
import LottieView from 'lottie-react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { colors } from '@/constants/tokens';
import { usePlayer } from '@/hooks/usePlayer';

const { width } = Dimensions.get('screen');

export function AudioPlayerDocked() {
  const { isPlaying, setIsPlaying, currentSound, animationLottieWave } =
    usePlayer();

  async function handlePLayPause() {
    const status =
      (await currentSound?.sound.getStatusAsync()) as AVPlaybackStatusSuccess;
    if (status.isPlaying) {
      animationLottieWave.current?.pause();
      currentSound?.sound.pauseAsync();
      setIsPlaying(false);
    } else {
      currentSound?.sound.playAsync();
      animationLottieWave.current?.play();
      setIsPlaying(true);
    }
  }

  return (
    <HStack
      bg="$amber200"
      borderRadius={20}
      m="$4"
      p="$3"
      h={100}
      alignItems="center"
      overflow="hidden"
      position="absolute"
      bottom="$12"
      right="$0"
      left="$0"
    >
      <Svg style={styles.linearGradient}>
        <Defs>
          <LinearGradient id="grad" x1="50%" y1="0%" x2="0%" y2="150%">
            <Stop offset="0" stopColor={colors.purple900} />
            <Stop offset="1" stopColor={colors.purple100} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      <VStack borderWidth="$1" borderColor="$white" borderRadius={20}>
        <LottieView
          ref={animationLottieWave}
          style={styles.lottieView}
          source={require('@/assets/lottie/music_wave.json')}
        />
      </VStack>
      <VStack flex={1} gap="$1" mx="$2">
        <Text fontSize="$sm" color="$white" numberOfLines={2}>
          {currentSound?.title.slice(0, -4)}
        </Text>
        <Text fontSize="$sm" color={colors.textLight}>
          Beling Alus
        </Text>
      </VStack>

      <TouchableOpacity onPress={handlePLayPause}>
        <VStack
          bg="$white"
          alignItems="center"
          justifyContent="center"
          rounded="$full"
          w="$10"
          h="$10"
        >
          <Entypo
            name={isPlaying ? 'controller-paus' : 'controller-play'}
            color={colors.purple500}
            size={22}
          />
        </VStack>
      </TouchableOpacity>
    </HStack>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    width: width,
  },
  lottieView: {
    width: 65,
    height: 65,
  },
});
