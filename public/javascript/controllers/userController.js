(function(){
	angular.module('app')
	.controller('userController', userController);
	userController.$inject = ['userFactory'];

	function userController(userFactory){
		var vm = this;
		vm.user = {};

		vm.register = function(user){
			userFactory.registerUser(user).then(function(res){
				console.log('final step');
			});
		}
		vm.login = function(user){
			userFactory.loginUser(user).then(function(res){
				console.log(res);
			})
		}
	}

})();