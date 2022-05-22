export enum CardError {
  DEAL_CARD_COUNT_ERROR = 'Number of cards to deal must be at least 1',
  DEAL_NOT_ENOUGH_CARDS_TO_DEAL_ERROR = 'Not enough cards in the draw pile to deal to each player.',
  DEAL_PLAYER_COUNT_ERROR = 'Number of players to deal to must be at least 1',
  DRAW_PILE_IS_EMPTY_ERROR = 'Draw pile is empty.',
}
