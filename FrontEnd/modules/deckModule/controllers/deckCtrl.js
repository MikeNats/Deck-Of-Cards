'use strict';

/**
 * @framework angular
 * @kind jsConcept
 * @type controller
 * @name logInPanelCtrl
 * @memberof module:usersAuthModule
 * @Description Tab toggler
 * @requires $scope
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../deckModule';

deckModule.controller('deckCtrl', ['$scope', 'deckApiFctry', ($scope, deckApiFctry) => {
	$scope.activeCards = [];
	$scope.numOfCardsToDraw = 0;
	$scope.message = 'Lets Play!!!';


	deckApiFctry.getCards().then((response) => {
		$scope.cards = response.data[0].cards;
	});
}]);