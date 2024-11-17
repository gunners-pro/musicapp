import { Dimensions, StyleSheet } from 'react-native';

import {
  Button,
  Center,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Library, ListMusic } from 'lucide-react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

import { colors } from '@/constants/tokens';

type Props = DrawerContentComponentProps;

const { width } = Dimensions.get('screen');

export function DrawerContent({ state, navigation }: Props) {
  const { index } = state;
  const colorPlaylist = index === 1 ? '$white' : colors.purple100;
  const colorHome = index === 0 ? '$white' : colors.purple100;

  return (
    <Center flex={1} alignItems="flex-start" px="$4" gap="$3">
      <Svg height={width * 0.6} width={width * 0.6} style={styles.background}>
        <Defs>
          <RadialGradient id="grad" gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor={colors.purple100} />
            <Stop offset="1" stopColor={colors.purple900} />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
        }}
        alt="Profile"
        w="$32"
        h="$32"
        borderRadius={44}
        ml="$4"
        mb="$4"
      />
      <VStack ml="$4" mb="$4">
        <Text fontSize="$lg" color={colors.purple100} mb="$4">
          Olá!
        </Text>
        <Text fontSize="$4xl" color="$white">
          Seja bem {'\n'}vindo.
        </Text>
      </VStack>
      <HStack w="$full" px="$4">
        <Button
          gap="$4"
          onPress={() => navigation.navigate('index')}
          bg="transparent"
          borderWidth="$1"
          borderColor="transparent"
          $active={{
            borderWidth: 1,
            borderColor: '$white',
          }}
          justifyContent="flex-start"
          w="$full"
        >
          <Icon as={ListMusic} color={colorHome} />
          <Text color={colorHome}>Playlist</Text>
        </Button>
      </HStack>
      <HStack w="$full" px="$4">
        <Button
          gap="$4"
          onPress={() => navigation.navigate('library')}
          bg="transparent"
          borderWidth="$1"
          borderColor="transparent"
          $active={{
            borderWidth: 1,
            borderColor: '$white',
          }}
          justifyContent="flex-start"
          w="$full"
        >
          <Icon as={Library} color={colorPlaylist} />
          <Text color={colorPlaylist}>Biblioteca</Text>
        </Button>
      </HStack>
    </Center>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: -50,
    top: -50,
    opacity: 0.6,
  },
});
