'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var app = angular
	.module('app', [uiRouter, 'deckModule'])
	.run(['$rootScope', '$state', '$stateParams', '$window', '$location', ($rootScope, $state, $stateParams, $window, $location) => {
		//state checks
	}])
	.config(['$stateProvider', '$urlRouterProvider',
		($stateProvider, $urlRouterProvider) => { //Router
			$stateProvider.state('index', { // Home
				url: '/index',
				views: {
					indexPage: {
						templateUrl: 'App/views/pages/deck.html'
					}
				},
				data: {
					requireLogin: false
				}
			});
			$urlRouterProvider.otherwise('/index'); //Default redirect
	}]);