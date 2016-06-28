'use static';

/**
 * @framework angular
 * @kind jsConcept
 * @type factory
 * @name authenticateApiFctry
 * @memberof module:usersAuthModule
 * @description User authentication.
 * @requires  $http
 * @requires  USER_API_PATHS
 * @author Michail Tsougkranis
 * @version 1.0
 * @since Angular 1.5.5
 */

import deckModule from '../deckModule';

deckModule.factory('deckApiFctry', ['$http', ($http) => {
	return {
		getCards: () => {
			return $http.get('/api/cards');
		}
	};
}]);