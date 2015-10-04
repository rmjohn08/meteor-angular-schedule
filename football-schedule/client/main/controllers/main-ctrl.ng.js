angular.module('football-schedule')
	.controller('MainCtrl', function($scope, $meteor) {

		$scope.links = [
			{'text':'Leagues','url':'/leagues'},
			{'text':'Teams','url':"javascript:alert('not implemented')"}
			
		];
		

	});