import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

export default function Home() {
  return (
    <GluestackUIProvider config={config}>{/* screens */}</GluestackUIProvider>
  );
}
