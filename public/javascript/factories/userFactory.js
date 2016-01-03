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

		return o;
	};
})();