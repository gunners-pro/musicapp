import { Dimensions, FlatList, StatusBar, StyleSheet } from 'react-native';

import {
  Button,
  Center,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AlignLeft, Search } from 'lucide-react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { DrawerWrapperAnimation } from '@/components/DrawerWrapperAnimation';
import { PlaylistItem } from '@/components/PlaylistItem';
import { colors } from '@/constants/tokens';

const { height, width } = Dimensions.get('screen');

export default function Home() {
  const navigation = useNavigation();

  function ToggleDrawer() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <DrawerWrapperAnimation>
      <VStack p="$2" h={height / 4} pt={StatusBar.currentHeight}>
        <HStack justifyContent="space-between">
          <Button
            size="xl"
            w="$12"
            bg="transparent"
            $active-bg={colors.purple500Hover}
            onPress={ToggleDrawer}
          >
            <Icon as={AlignLeft} size="xl" color="$white" />
          </Button>

          <Button
            size="xl"
            w="$12"
            bg="transparent"
            $active-bg={colors.purple500Hover}
          >
            <Icon as={Search} size="xl" color="$white" />
          </Button>
        </HStack>
        <Svg style={styles.linearGradient}>
          <Defs>
            <LinearGradient id="grad" x1="20%" y1="0%" x2="10%" y2="140%">
              <Stop offset="0" stopColor={colors.purple500} />
              <Stop offset="1" stopColor={colors.purple500Hover} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
        <Center>
          <Text color="$white" fontSize="$xl">
            Bom dia!
          </Text>
          <Text color="$white" fontSize="$3xl" fontWeight="$bold" mt="$4">
            Fabricyo Barreto
          </Text>
        </Center>
      </VStack>
      <VStack
        flex={1}
        bg="$white"
        borderTopLeftRadius={40}
        borderTopRightRadius={40}
        mt={-50}
        py="$6"
      >
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mb="$6"
          px="$6"
        >
          <Text fontSize="$xl" fontWeight="$bold" color={colors.purple900}>
            Playlist
          </Text>
          <Text fontSize="$sm" color={colors.textLight}>
            Ver mais
          </Text>
        </HStack>
        <FlatList
          data={[0, 1, 2, 3]}
          keyExtractor={item => String(item)}
          renderItem={() => <PlaylistItem />}
          horizontal
          style={styles.playlistStyle}
          contentContainerStyle={styles.playlistContainerStyle}
          showsHorizontalScrollIndicator={false}
        />
      </VStack>
    </DrawerWrapperAnimation>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: height / 4,
    width: width,
    zIndex: -1,
  },
  playlistStyle: {
    flexGrow: 0,
  },
  playlistContainerStyle: {
    marginLeft: 24,
    paddingRight: 24,
    paddingBottom: 12,
  },
});
