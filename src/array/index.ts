export function cloneArray<T>(array: T[]): T[] {
  const clonedArray: T[] = [];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const clone = { ...array[i] };
    clonedArray.push(clone);
  }
  return clonedArray;
}

export function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function rangeOfNumbers(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}
