import { useContext } from 'react';

import { AudioFilesContext } from '@/context/AudioFilesContext';

export function useAudioFiles() {
  const context = useContext(AudioFilesContext);
  return context;
}
