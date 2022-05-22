import StandardCard from '../cards/standard-card';
import { StandardDeckCard } from '../types';

export default function constructStandardDeck(): Set<StandardCard> {
  const cards: Set<StandardCard> = new Set<StandardCard>();
  let counter = 1;
  for (const cardType in StandardDeckCard) {
    if (cardType !== StandardDeckCard.BLANK && cardType !== StandardDeckCard.JOKER) {
      cards.add(new StandardCard(counter, cardType as StandardDeckCard));
      counter += 1;
    }
  }
  console.log(cards);
  console.log(cards.size);

  return cards;
}
