(function(){
angular.module('app', ['ui.router'])
.config(Config);
Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config($stateProvider, $urlRouterProvider){
	$stateProvider.state('Home', {
		url: '/',
		templateUrl: 'templates/home.html'
	}).state('Register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'userController as vm'
	}).state('Login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'userController as vm'
	});
	$urlRouterProvider.otherwise('/');
};
})();