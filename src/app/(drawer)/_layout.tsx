import { Dimensions, StyleSheet } from 'react-native';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { DrawerContent } from '@/components/DrawerContent';
import { colors } from '@/constants/tokens';

const { width } = Dimensions.get('screen');

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerStyle: {
            backgroundColor: colors.purple900,
            width: width * 0.6,
          },
          sceneStyle: {
            backgroundColor: colors.purple900,
          },
          overlayColor: 'transparent',
        }}
        drawerContent={props => DrawerContent(props)}
      >
        <Drawer.Screen name="index" options={{ drawerLabel: 'Homepage' }} />
        <Drawer.Screen name="playlist" options={{ drawerLabel: 'Playlist' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple900,
  },
});
