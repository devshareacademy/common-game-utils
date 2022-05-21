import InMemoryStorage from './in-memory-storage';
import LocalStorage from './local-storage';
import GameStorage from './game-storage';

export type { Storage } from './types';

export const storage: {
  InMemoryStorage: typeof InMemoryStorage;
  LocalStorage: typeof LocalStorage;
  GameStorage: typeof GameStorage;
} = {
  InMemoryStorage,
  LocalStorage,
  GameStorage,
};
