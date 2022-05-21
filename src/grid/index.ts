import BasicGrid from './basic-grid';
import ConsoleGrid from './console-grid';

export type { Coordinate, Cell } from './types';

export const grid: {
  BasicGrid: typeof BasicGrid;
  ConsoleGrid: typeof ConsoleGrid;
} = {
  BasicGrid,
  ConsoleGrid,
};
