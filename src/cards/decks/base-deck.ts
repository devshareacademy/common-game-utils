import type { Card, Deck } from '../types';
import { CardError } from '../types';
import { cloneArray, shuffleArray } from '../../array';

export default abstract class BaseDeck<Type> implements Deck<Type> {
  protected _cards: Card<Type>[] = [];
  protected _drawPile: Card<Type>[] = [];
  protected _discardPile: Card<Type>[] = [];

  get cards(): Card<Type>[] {
    return this._cards;
  }

  get drawPile(): Card<Type>[] {
    return this._drawPile;
  }

  get discardPile(): Card<Type>[] {
    return this._discardPile;
  }

  public reshuffleCards(): void {
    this._drawPile = this._drawPile.concat(this._discardPile);
    shuffleArray(this._drawPile);
  }

  public drawCard(): Card<Type> {
    const card = this._drawPile.shift();
    if (card === undefined) {
      throw new Error(CardError.DRAW_PILE_IS_EMPTY_ERROR);
    }
    return card;
  }

  public addToDiscardPile(card: Card<Type>): void {
    this._discardPile.push(card);
  }

  public dealCards(numberOfPlayers: number, numberOfCards: number): Card<Type>[][] {
    if (numberOfPlayers <= 0) {
      throw new Error(CardError.DEAL_PLAYER_COUNT_ERROR);
    }
    if (numberOfCards <= 0) {
      throw new Error(CardError.DEAL_CARD_COUNT_ERROR);
    }
    if (numberOfCards * numberOfPlayers > this._drawPile.length) {
      throw new Error(CardError.DEAL_NOT_ENOUGH_CARDS_TO_DEAL_ERROR);
    }

    const playerPiles: Card<Type>[][] = [];
    for (let i = 0; i < numberOfPlayers; i += 1) {
      const playerPile: Card<Type>[] = [];
      for (let j = 0; j < numberOfCards; j += 1) {
        playerPile.push(this.drawCard());
      }
      playerPiles.push(playerPile);
    }

    return playerPiles;
  }

  public resetDeck(): void {
    this._discardPile = [];
    this._drawPile = [];
    this._drawPile = cloneArray(this._cards);
  }
}
