import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  children: ReactNode;
};

export function DrawerWrapperAnimation({ children }: Props) {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [0, 1];
    return {
      transform: [
        {
          scale: interpolate(
            progress.value,
            inputRange,
            [1, 0.85],
            Extrapolation.CLAMP,
          ),
        },
        {
          rotateZ: `${interpolate(
            progress.value,
            inputRange,
            [0, -8],
            Extrapolation.CLAMP,
          )}deg`,
        },
        {
          translateX: interpolate(
            progress.value,
            inputRange,
            [0, 25],
            Extrapolation.CLAMP,
          ),
        },
      ],
      borderRadius: interpolate(
        progress.value,
        inputRange,
        [0, 40],
        Extrapolation.CLAMP,
      ),
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
