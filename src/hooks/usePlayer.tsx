import { useContext } from 'react';

import { PlayerContext } from '@/context/PlayerContext';

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  return ctx;
}
