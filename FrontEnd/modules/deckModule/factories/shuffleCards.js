import deckModule from '../deckModule';

deckModule.factory('shuffleCardsFctry', [() => {
	return (cards) => { //https://www.frankmitchell.org/2015/01/fisher-yates/
		let j,
			temp = null;

		for (let i = cards.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1))
			temp = cards[i]
			cards[i] = cards[j]
			cards[j] = temp;
		}

		return cards;
	};
}]);