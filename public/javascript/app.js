(function(){
angular.module('app', ['ui.router'])
.config(Config);
Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html'
	}).state('login', {
		url: '/login',
		templateUrl: 'templates/login.html'
	});
	$urlRouterProvider.otherwise('/');
};
})();