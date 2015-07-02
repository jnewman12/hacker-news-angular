angular.module('flapperNews', ['ui.router'])
// setting up the config and defining our routes
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		// states are the routes
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});
		.state('posts', {
			// route parameter similar to :id in sinatra
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

	$urlRouterProvider.otherwise('home');	
}])

// services are a means of keeping data around for the lifetime of an application, and can be used across different controllers
// the 3 ways to do that are a factory, service, or provider
// factory; you create an object, add properties to it, then return that same object. when you pass the service into the controller, those properties on the object are available in that controller
// service; instantiated w/ the new keyword. Doing that allows you to call 'this'. When passed into the controller, those properties will be available in that controller through the service
// providers; can be passed into the .config function, which I believe is what is referenced above in our routes. Providers are used when you want to provide module like config for the service object, before being made available


// setting up angular app called 'Flapper News'
angular.module('flapperNews', [])
// setting up a controller, as an object on the angular.module
.controller('MainCtrl', [
	'$scope', 
	// '$stateParams'
	'posts', // referring to the factory (service)
	function($scope, $stateParams, posts){
		$scope.posts = 
		// {title: 'post 1', upvotes: 5},
		// {title: 'post 2', upvotes: 2},
		// {title: 'post 3', upvotes: 15},
		// {title: 'post 4', upvotes: 9},
		// {title: 'post 5', upvotes: 4}
		posts.posts;
		
	// scope variable serves as the bridge between angular controllers and angular templates
	// if you want something to be accessible in the template such as a function (method) or certain variable, bind it to scope
	$scope.addPost = function(){
	// saying if title is empty, dont do anything	
		if(!$scope.title || $scope.title === '') { return;}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			comments: [
			{author: 'Joe', body: 'Cool stuff!', upvotes: 0},
			{author: 'Bob', body: 'Great idea, but it is wrong', upvotes: 0}
			]
		});
		$scope.title = '';
		$scope.link = '';
	};
	// targeting our span, activated by ng-click
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);

.controller('PostsCtrl', [
	'$scope', 
	'$stateParams', 
	'posts', 
	function($scope, $stateParams, posts){
		$scope.post = posts.posts[$stateParams.id];
}]);

.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])
