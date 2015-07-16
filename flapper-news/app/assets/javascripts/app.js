var App = angular.module('flapperNews', ['ui.router', 'templates', 'Devise']);

//angular.module('flapperNews', ['ui.router', 'templates'])
// setting up the config and defining our routes
App.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		// states are the routes
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'MainCtrl',
			resolve: {
				postPromise: ['posts', function(posts){
					// our posts service
					return posts.getAll();
				}]
			}
		})
		.state('posts', {
			// route parameter similar to :id in sinatra
			url: '/posts/{id}',
			templateUrl: 'posts/_posts.html',
			controller: 'PostsCtrl',
			resolve: {
				post: ['$stateParams', 'posts', function($stateParams, posts) {
					return posts.get($stateParams.id);
				}]
				/*
				The Angular ui-router detects we are entering the posts state and will then automatically query the server for 
				the full post object, including comments. Only after the request has returned will the state finish loading.
				*/
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'auth/_login.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
            $state.go('home');
           })
          }]
		})
		.state('register', {
			url: '/register',
			templateUrl: 'auth/_register.html',
			controller: 'AuthCtrl',
			onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
            $state.go('home');
            })
          }]
		})

	$urlRouterProvider.otherwise('home');	
}])

// services are a means of keeping data around for the lifetime of an application, and can be used across different controllers
// the 3 ways to do that are a factory, service, or provider
// factory; you create an object, add properties to it, then return that same object. when you pass the service into the controller, those properties on the object are available in that controller
// service; instantiated w/ the new keyword. Doing that allows you to call 'this'. When passed into the controller, those properties will be available in that controller through the service
// providers; can be passed into the .config function, which I believe is what is referenced above in our routes. Providers are used when you want to provide module like config for the service object, before being made available