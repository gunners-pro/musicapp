import { Dimensions, StyleSheet } from 'react-native';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { DrawerContent } from '@/components/DrawerContent';

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
            backgroundColor: '#26073e',
            width: width * 0.6,
          },
          sceneStyle: {
            backgroundColor: '#26073e',
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
  },
});
