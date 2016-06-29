'use static';

/**
 * @framework angular
 * @kind module
 * @name usersAuthModule
 * @public
 * @static
 * @description Contains User Authentication Services.
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../deckModule';

deckModule.directive('drawCards', ['drawCardsFctry', (drawCardsFctry) => {
	return {
		restrict: 'E',
		template: `<fieldset>
						<span class="columns">{{numOfCardsToDraw}}</span>
						<input class="columns" min="0" ng-model="numOfCardsToDraw" max="{{cards.length - activeCards.length}}" type="range"/>
						<button class='button'>Draw Cards</button>
					</fieldset>`,
		link: (scope, elem, attrs) => {
			var drawCardsbutton = angular.element(elem[0].children[0].children[2]);

			drawCardsbutton.bind('click', () => {
				scope.activeCards = scope.activeCards.concat(drawCardsFctry(scope.cards, scope.numOfCardsToDraw));
				scope.message = 'You draw ' + scope.numOfCardsToDraw + '. You have picked in total ' + scope.activeCards.length + ' cards';
				scope.numOfCardsToDraw = 0;
				scope.$apply();
			});
		}
	}
}]);