// this is our module/controller. It let's us take our data from our rails controller that's rendering json 
// w/ the routes me made in routes.rb. This then gets passed along in our postsCtrl
App.factory('posts', [
	'$http',
	function($http){
	// just making an arbitrarily named object that contains a posts array. Acting as a placeholder for data we
	// can store and manipulate
    var o = {
        posts: []
    };
    o.getAll = function() {
    	return $http.get('/posts.json')
    	.success(function(data){
    		angular.copy(data, o.posts)
    	});
    };
    o.create = function(post) {
    	return $http.post('/posts.json', post)
    	.success(function(data){
    		o.posts.push(data);
    	});
    };
    o.upvote = function(post) {
    	return $http.put('/posts/' + post.id + '/upvote.json')
    	.success(function(data){
    		post.upvotes = post.upvotes + 1;
    	});
    };
    o.get = function(id) {
    	return $http.get('/posts/' + id + '.json').then(function(res){
    		return res.data;
    	});
    };
    o.addComment = function(id, comment) {
    	return $http.post('/posts/' + id + '/comments.json', comment);
    };
    o.upvoteComment = function(post, comment) {
    	return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
    	.success(function(data){
    		comment.upvotes += 1;
    	});
    };
    return o;
}]);
