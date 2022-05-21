export type GridConfiguration = {
  numberOfRows: number;
  numberOfCols: number;
  width: number;
  height: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export type Cell = {
  width: number;
  height: number;
};

export interface Grid {
  cellDimensions: Cell;
  gridDimensions: Cell;
  resize(width: number, height: number): void;
  placeAtPosition(x: number, y: number): Coordinate;
  placeAtIndex(index: number): Coordinate;
  showGrid(): void;
  showGridWithIndexes(): void;
}
