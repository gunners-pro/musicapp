import { FlatList, StatusBar, StyleSheet } from 'react-native';

import { Button, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AlignLeft } from 'lucide-react-native';

import { AudioPlayerDocked } from '@/components/AudioPlayerDocked';
import { DrawerWrapperAnimation } from '@/components/DrawerWrapperAnimation';
import { MusicItemLibrary } from '@/components/MusicItemLibrary';
import { colors } from '@/constants/tokens';
import { PlayerContextProvider } from '@/context/PlayerContext';
import { useAudioFiles } from '@/hooks/useAudioFiles';

export default function Library() {
  const navigation = useNavigation();
  const { audioFiles } = useAudioFiles();

  function ToggleDrawer() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <DrawerWrapperAnimation>
      <VStack flex={1} bg="$white" p="$2" pt={StatusBar.currentHeight}>
        <HStack alignItems="center">
          <Button
            size="xl"
            w="$12"
            mr="$2"
            bg="transparent"
            $active-bg={colors.purple500Hover}
            onPress={ToggleDrawer}
          >
            <Icon as={AlignLeft} size="xl" color={colors.purple900} />
          </Button>

          <Text fontWeight="$bold" fontSize="$xl" color={colors.purple900}>
            Biblioteca
          </Text>
        </HStack>

        <PlayerContextProvider>
          <VStack flex={1}>
            <FlatList
              data={audioFiles}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <MusicItemLibrary item={item} />}
              contentContainerStyle={styles.contentContainer}
              style={styles.containerList}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<Text>Nenhuma música encontrada</Text>}
            />
          </VStack>
          <AudioPlayerDocked />
        </PlayerContextProvider>
      </VStack>
    </DrawerWrapperAnimation>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
    paddingBottom: 166,
  },
  containerList: {
    flex: 1,
    paddingTop: 12,
  },
});
