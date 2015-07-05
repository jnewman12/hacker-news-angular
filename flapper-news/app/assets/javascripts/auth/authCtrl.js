App.controller('AuthCtrl', [
	'$scope',
	'$state',
	'Auth',
	function($scope, $state, Auth) {
	// these functions to Auth. These return promises, which redirect the user to home state if auth/registration is successful	
	$scope.login = function() {
		Auth.login($scope.user).then(function(){
			$state.go('home');
		});
	};
	$scope.register = function() {
		Auth.register($scope.user).then(function(){
			$state.go('home');
		});
	};
}])