(function(){
	angular.module('app')
	.controller('userController', userController);
	userController.$inject = ['userFactory'];

	function userController(userFactory){
		var vm = this;
		vm.user = {};

		vm.register = function(user){
			console.log(user);
			userFactory.registerUser(user).then(function(res){
				console.log('final step');
			});
		}
		vm.login = function(user){
			console.log(user);
		}
	}

})();