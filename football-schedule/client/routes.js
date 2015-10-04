angular.module('football-schedule')
	.config(function($urlRouterProvider, $stateProvider,$locationProvider) {
		
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('main',{
				url:'/',
				templateUrl:'client/main/views/main.ng.html',
				controller:'MainCtrl'
			})
			.state('leagues',{
				url : '/leagues',
				templateUrl : 'client/league/views/leagues.ng.html',
				controller : 'LeagueCtrl as leagueCtrl'
			});

		$urlRouterProvider.otherwise('/');

	});