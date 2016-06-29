import deckModule from '../deckModule';

deckModule.factory('sortCardsFctry', [() => {
	let compare = (a, b) => {
		if (a.number > b.number) {
			return -1;
		} else if (a.number < b.number) {
			return 1;
		} else {
			return 0;
		}
	};

	return (activeCards) => {
		return activeCards.filter(card => {
				return card.suite === 'C';
			})
			.sort(compare)
			.concat(

				activeCards.filter(card => {
					return card.suite === 'S';
				}).sort(compare),

				activeCards.filter(card => {
					return card.suite === 'H';
				}).sort(compare),

				activeCards.filter(card => {
					return card.suite === 'D';
				}).sort(compare)
			);
	};
}]);