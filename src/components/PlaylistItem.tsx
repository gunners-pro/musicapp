import { StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
import { BlurView } from 'expo-blur';
import { Music } from 'lucide-react-native';
import { Shadow } from 'react-native-shadow-2';

import { colors } from '@/constants/tokens';

export function PlaylistItem() {
  return (
    <VStack mr="$4">
      <Shadow distance={7} offset={[0, 4]} style={styles.shadow}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          alt="playlist"
          w="$40"
          h="$40"
          borderRadius={30}
        />
        <BlurView
          intensity={80}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
          blurReductionFactor={20}
          style={styles.blurContainer}
        >
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text color="$white" fontSize="$md" fontWeight="$medium">
                Musik Pagi
              </Text>

              <HStack alignItems="center" gap="$1" mt="$0.5">
                <Icon as={Music} color="$white" size="sm" w="$10" />
                <Text color="$blueGray300" fontSize="$xs">
                  12 Tracks
                </Text>
              </HStack>
            </VStack>
            <VStack
              bg="$white"
              alignItems="center"
              justifyContent="center"
              rounded="$full"
              w="$8"
              h="$8"
            >
              <TouchableOpacity>
                <Entypo
                  name="controller-play"
                  color={colors.purple500}
                  size={20}
                />
              </TouchableOpacity>
            </VStack>
          </HStack>
        </BlurView>
      </Shadow>
    </VStack>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    left: 6,
    borderRadius: 14,
    height: 60,
    overflow: 'hidden',
    padding: 10,
  },
  shadow: {
    borderRadius: 30,
  },
});
