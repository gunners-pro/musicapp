import { Button, Text, VStack } from '@gluestack-ui/themed';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { DrawerWrapperAnimation } from '@/components/DrawerWrapperAnimation';

export default function Playlist() {
  return (
    <DrawerWrapperAnimation>
      <VStack flex={1} bg="$white">
        <DrawerToggleButton />
        <Text>Playlist</Text>
        <Button>
          <Text>Clique</Text>
        </Button>
      </VStack>
    </DrawerWrapperAnimation>
  );
}
