import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { HStack, Image, Text, VStack } from '@gluestack-ui/themed';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { colors } from '@/constants/tokens';
import { usePlayer } from '@/hooks/usePlayer';

const { width } = Dimensions.get('screen');

export function AudioPlayerDocked() {
  const { isPlaying, currentSound } = usePlayer();

  return (
    <HStack
      bg="$amber200"
      borderRadius={20}
      m="$4"
      p="$3"
      alignItems="center"
      overflow="hidden"
      position="absolute"
      bottom="$0"
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

      <Image
        source={{
          uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        alt="album"
        borderRadius={20}
        size="md"
      />
      <VStack flex={1} gap="$1" mx="$2">
        <Text fontSize="$sm" color="$white" numberOfLines={2}>
          {currentSound?.title.slice(0, -4)}
        </Text>
        <Text fontSize="$sm" color={colors.textLight}>
          Beling Alus
        </Text>
      </VStack>
      <VStack
        bg="$white"
        alignItems="center"
        justifyContent="center"
        rounded="$full"
        w="$10"
        h="$10"
      >
        <TouchableOpacity>
          <Entypo
            name={isPlaying ? 'controller-paus' : 'controller-play'}
            color={colors.purple500}
            size={22}
          />
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '130%',
    width: width,
  },
});
