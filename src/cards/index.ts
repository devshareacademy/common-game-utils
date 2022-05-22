import { BaseCard, StandardCard } from './cards';
import { BaseDeck, StandardDeck } from './decks';
import * as utils from './utils/construct-standard-deck';
import type { Card, Deck } from './types';
import { CardError, StandardDeckCard } from './types';

export type { Card, Deck };

export { BaseCard, StandardCard, BaseDeck, StandardDeck, utils, CardError, StandardDeckCard };

export const cards: {
  BaseCard: typeof BaseCard;
  StandardCard: typeof StandardCard;
  BaseDeck: typeof BaseDeck;
  StandardDeck: typeof StandardDeck;
  CardError: typeof CardError;
  StandardDeckCard: typeof StandardDeckCard;
} = {
  BaseCard,
  StandardCard,
  BaseDeck,
  StandardDeck,
  CardError,
  StandardDeckCard,
};
