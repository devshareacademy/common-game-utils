import BasicGrid from './basic-grid';

export default class ConsoleGrid extends BasicGrid {
  protected drawGridWithIndexes(): void {
    const table: number[][] = [];
    for (let i = 0; i < this.numberOfRows; i += 1) {
      table[i] = [];
      for (let j = 0; j < this.numberOfCols; j += 1) {
        table[i][j] = i * this.numberOfCols + j;
      }
    }
    console.table(table);
  }

  protected drawGrid(): void {
    const table: string[][] = [];
    for (let i = 0; i < this.numberOfRows; i += 1) {
      table[i] = [];
      for (let j = 0; j < this.numberOfCols; j += 1) {
        table[i][j] = '';
      }
    }
    console.table(table);
  }
}
