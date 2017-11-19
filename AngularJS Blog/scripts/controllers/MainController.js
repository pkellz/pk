 app.controller("MainController",['$scope','Posts','$routeParams',function($scope,Posts,$routeParams){
	 //Get posts via a service called 'Posts'
	Posts.getPosts();
	var promise = Posts.returnPromise();
	promise.then(success, error);
	 function success(response)
	 {
		 $scope.posts = response.data;
		 console.log($scope.posts);
	 }
	 function error(err)
	 {
		 $scope.posts = err;
	 }
	 //Add a new post
	$scope.addPost = function()
	{
		if($scope.newPost == null)
		{
			alert("Must Enter At Least 1 Character!");
		}
		else
		{
			var newPost = {title: $scope.newPost, likes:0,comments:[]};
			$scope.posts.push(newPost);
			$scope.newPost = null;
		}
	}
	//Add a new comment
	$scope.addComment = function(index)
	{
		if($scope.newComment == null)
		{
			alert("Must Enter At Least 1 Character!");
		}
		else
		{
			var newComment = $scope.newComment;
			$scope.posts[index].comments.push(newComment);
			$scope.newComment = null;
		}
	}
	$scope.id = $routeParams.id;
 }]);

 app.config(function($routeProvider){
	 $routeProvider
		.when("/view1",{
			controller:"MainController",
			templateUrl:"/pk/AngularJS Blog/scripts/views/home.html"

		})
		.when("/post/:id",{
			controller:"MainController",
			templateUrl:"/AngularJS Blog/scripts/views/postview.html"
		})
		.when("/about",{
			controller:"AboutController",
			templateUrl:"/AngularJS Blog/scripts/views/about.html"
		})
		.otherwise({redirectTo:'/view1'});
 });
