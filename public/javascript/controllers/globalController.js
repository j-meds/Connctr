angular.module('app')
.controller('globalController', globalController);

function globalController($scope){
	$scope.hello = 'welcome mate';
};