import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';

import { AudioFilesProvider } from '@/context/AudioFilesContext';

export default function Layout() {
  return (
    <GluestackUIProvider config={config}>
      <AudioFilesProvider>
        <Slot />
      </AudioFilesProvider>
    </GluestackUIProvider>
  );
}
