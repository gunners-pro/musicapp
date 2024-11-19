import { StyleSheet, TouchableOpacity } from 'react-native';

import { HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
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
  const { playSound, stopCurrentSound, currentPlayingId } = usePlayer();

  async function handlePlayMusic() {
    currentPlayingId === item.id
      ? stopCurrentSound()
      : playSound({ id: item.id, uri: item.uri, title: item.filename });
  }

  return (
    <HStack mb="$5" justifyContent="space-between">
      <TouchableOpacity style={styles.btnPlayAudio} onPress={handlePlayMusic}>
        <HStack gap="$2" alignItems="center">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            alt="album"
            borderRadius={20}
          />
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
});
