App.controller('NavCtrl', [
	'$scope',
	// Auth is the devise helper package exposed in our angular.module call in app.js
	'Auth',
	function($scope, Auth) {
     $scope.signedIn = Auth.isAuthenticated;
     $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    // these functions are from the Auth:devise stuff made available
    // here on all the devise functions we are calling $scope.user
    $scope.$on('devise:new-registration', function(e, user){
    	$scope.user = user;
    });
    $scope.$on('devise:login', function(e, user){
    	$scope.user = user;
    });
    $scope.$on('devise:logout', function(e, user){
    	$scope.user = {};
    });
}])