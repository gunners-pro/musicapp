import { FlatList, StyleSheet } from 'react-native';

import { Button, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AlignLeft } from 'lucide-react-native';

import { DrawerWrapperAnimation } from '@/components/DrawerWrapperAnimation';
import { MusicItemLibrary } from '@/components/MusicItemLibrary';
import { colors } from '@/constants/tokens';

export default function Playlist() {
  const navigation = useNavigation();

  function ToggleDrawer() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <DrawerWrapperAnimation>
      <VStack flex={1} bg="$white" p="$2">
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

        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => <MusicItemLibrary />}
          contentContainerStyle={styles.contentContainer}
          style={styles.containerList}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </DrawerWrapperAnimation>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  containerList: {
    paddingTop: 12,
  },
});
