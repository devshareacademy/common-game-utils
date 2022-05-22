import type { StandardDeckCard } from '../types';
import BaseDeck from './base-deck';
import constructStandardDeck from '../utils/construct-standard-deck';

export default class StandardDeck extends BaseDeck<StandardDeckCard> {
  constructor() {
    super();
    this.constructDeck();
  }

  private constructDeck(): void {
    this._cards = Array.from(constructStandardDeck());
  }
}
