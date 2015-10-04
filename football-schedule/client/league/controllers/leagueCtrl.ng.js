angular.module('football-schedule')
	.controller('LeagueCtrl',function($scope, $meteor) {

		var leagueCtrl = this;

		leagueCtrl.leagues = $meteor.collection(Leagues);






	});
