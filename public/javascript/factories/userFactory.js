(function(){
	angular.module('app')
	.factory('userFactory', userFactory);
	userFactory.$inject = ['$http', '$q'];

	function userFactory($http, $q){
		var o = {};

		o.registerUser = function(user){
			var q = $q.defer();
			$http.post('/api/user/register', user).success(function(res){
				console.log('user has registered');
				q.resolve();
			})
			return q.promise;
		}
		o.loginUser = function(user){
			var q = $q.defer();
			$http.post('/api/user/login', user).success(function(res){
				for(var i = 0; i < arguments.length; i++){
					console.log(arguments[i]);
				}
				q.resolve(res);
			})
			return q.promise;
		}

		return o;
	};
})();