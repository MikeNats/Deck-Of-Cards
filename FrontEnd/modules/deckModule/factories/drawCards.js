import deckModule from '../deckModule';

deckModule.factory('drawCardsFctry', [() => {
	return (cards, numberOfCards) => {
		let drawnCardsNum = 0,
			drawnCards = [];

		for (let i = 0; i < cards.length; i++) {
			if (!cards[i].active) {
				if (drawnCardsNum !== +numberOfCards) {
					drawnCardsNum++;
					cards[i].active = true;
					drawnCards.push(cards[i]);
				}
			}
		}
		return drawnCards;
	};
}]);