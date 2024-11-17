import { TouchableOpacity } from 'react-native';

import { HStack, Icon, Image, Text, VStack } from '@gluestack-ui/themed';
import { EllipsisVertical } from 'lucide-react-native';

import { colors } from '@/constants/tokens';

export function MusicItemLibrary() {
  return (
    <HStack mb="$5" justifyContent="space-between">
      <TouchableOpacity>
        <HStack gap="$4" alignItems="center">
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            alt="album"
            borderRadius={20}
          />
          <VStack gap="$1">
            <Text fontWeight="$black" fontSize="$lg" color={colors.purple900}>
              Balonku Ada 5 Meter
            </Text>
            <Text fontSize="$sm" color={colors.textLight}>
              Mamank . Popular Song
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
      <HStack alignItems="center" gap="$3">
        <Text fontSize="$sm" color={colors.textLight}>
          3:49
        </Text>
        <TouchableOpacity>
          <Icon as={EllipsisVertical} size="lg" />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
}
