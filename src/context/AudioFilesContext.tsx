import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import * as MediaLibrary from 'expo-media-library';

export type AudioFile = {
  id: string;
  filename: string;
  duration: number;
  uri: string;
  albumId?: string;
};

type AudioFilesContextData = {
  audioFiles: AudioFile[];
};

export const AudioFilesContext = createContext<AudioFilesContextData>(
  {} as AudioFilesContextData,
);

type AudioFilesProps = {
  children: ReactNode;
};

export function AudioFilesProvider({ children }: AudioFilesProps) {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const getAudioFiles = useCallback(async () => {
    if (permissionResponse?.status !== MediaLibrary.PermissionStatus.GRANTED) {
      await requestPermission();
    }
    const fetchAudioFiles = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });

    setAudioFiles(fetchAudioFiles.assets);
  }, [permissionResponse?.status, requestPermission]);

  useEffect(() => {
    getAudioFiles();
  }, [getAudioFiles]);

  return (
    <AudioFilesContext.Provider value={{ audioFiles }}>
      {children}
    </AudioFilesContext.Provider>
  );
}
