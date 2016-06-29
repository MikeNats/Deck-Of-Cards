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

deckModule.directive('sortCards', ['sortCardsFctry', (sortCardsFctry) => {
	return {
		restrict: 'E',
		template: `<fieldset >
						<button class="button">Sort Cards</button>
					</fieldset>`,
		link: (scope, elem, attrs) => {
			elem.bind('click', () => {
				scope.activeCards = sortCardsFctry(scope.activeCards);
				scope.message = 'Cards are sorted';
				scope.$apply();

				console.log("Sort: ", scope.activeCards); //for your convenience
			});
		}
	}
}]);