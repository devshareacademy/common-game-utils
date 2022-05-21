import type { Cell, Coordinate, Grid, GridConfiguration } from './types';

export default abstract class BasicGrid implements Grid {
  protected readonly numberOfRows: number;

  protected readonly numberOfCols: number;

  protected width: number;

  protected height: number;

  protected cellWidth: number;

  protected cellHeight: number;

  get cellDimensions(): Cell {
    return {
      width: this.cellWidth,
      height: this.cellHeight,
    };
  }

  get gridDimensions(): Cell {
    return {
      width: this.width,
      height: this.height,
    };
  }

  constructor(config: GridConfiguration) {
    this.numberOfCols = config.numberOfCols;
    this.numberOfRows = config.numberOfRows;
    this.height = config.height;
    this.width = config.width;

    this.cellHeight = config.height / config.numberOfRows;
    this.cellWidth = config.width / config.numberOfCols;
  }

  protected abstract drawGridWithIndexes(): void;

  protected abstract drawGrid(): void;

  public resize(width: number, height: number): void {
    this.height = height;
    this.width = width;

    this.cellHeight = height / this.numberOfRows;
    this.cellWidth = width / this.numberOfCols;
  }

  public placeAtPosition(x: number, y: number): Coordinate {
    const updatedXPosition = this.cellWidth * x + this.cellWidth / 2;
    const updatedYPosition = this.cellHeight * y + this.cellHeight / 2;

    return {
      x: updatedXPosition,
      y: updatedYPosition,
    };
  }

  public placeAtIndex(index: number): Coordinate {
    const y = Math.floor(index / this.numberOfCols);
    const x = index - y * this.numberOfCols;

    return this.placeAtPosition(x, y);
  }

  public showGrid(): void {
    this.drawGrid();
  }

  public showGridWithIndexes(): void {
    this.drawGridWithIndexes();
  }
}
