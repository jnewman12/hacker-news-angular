// setting up angular app called 'Flapper News'
angular.module('flapperNews', [])
// setting up a controller, as an object on the angular.module
.controller('MainCtrl', [
	'$scope', 
	function($scope){
		// where the test variable in the html comes from
		$scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 15},
		{title: 'post 4', upvotes: 9},
		{title: 'post 5', upvotes: 4}
		];
	// scope variable serves as the bridge between angular controllers and angular templates
	// if you want something to be accessible in the template such as a function (method) or certain variable, bind it to scope
	$scope.addPost = function(){
	// saying if title is empty, dont do anything	
		if(!$scope.title || $scope.title === '') { return;}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};
	// targeting our span, activated by ng-click
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);