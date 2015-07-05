App.controller('MainCtrl', [
	'$scope', 
	'posts', // referring to the factory (service)
	function($scope, posts){
		$scope.posts = posts.posts;
		
	// scope variable serves as the bridge between angular controllers and angular templates
	// if you want something to be accessible in the template such as a function (method) or certain variable, bind it to scope
	$scope.addPost = function(){
	// saying if title is empty, dont do anything	
		if(!$scope.title || $scope.title === '') { return;}
		posts.create({
			title: $scope.title,
			link: $scope.link,
		});
		$scope.title = '';
		$scope.link = '';
	};
	// targeting our span, activated by ng-click
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}])