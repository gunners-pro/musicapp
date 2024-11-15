import { Dimensions, StyleSheet } from 'react-native';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          drawerActiveBackgroundColor: 'yellow',
          drawerStyle: {
            backgroundColor: '#3a1d5c',
            width: width * 0.6,
          },
          sceneStyle: {
            backgroundColor: '#3a1d5c',
          },
          overlayColor: 'transparent',
        }}
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
  },
});
