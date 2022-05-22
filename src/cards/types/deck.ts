import { Card } from './card';

export interface Deck<Type> {
  cards: Card<Type>[];
  drawPile: Card<Type>[];
  discardPile: Card<Type>[];
  reshuffleCards(): void;
  drawCard(): Card<Type>;
  addToDiscardPile(card: Card<Type>): void;
  dealCards(numberOfPlayers: number, numberOfCards: number): Card<Type>[][];
}
