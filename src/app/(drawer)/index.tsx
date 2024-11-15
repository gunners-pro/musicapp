import { Button, Text, VStack } from '@gluestack-ui/themed';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { DrawerWrapperAnimation } from '@/components/DrawerWrapperAnimation';

export default function Home() {
  return (
    <DrawerWrapperAnimation>
      <VStack p="$4" bg="$white" flex={1} borderRadius={0}>
        <DrawerToggleButton />
        <Text>Menu</Text>
        <Button>
          <Text>Clique</Text>
        </Button>
      </VStack>
    </DrawerWrapperAnimation>
  );
}
