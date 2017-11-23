 app.controller("MainController",['$scope','Posts','$routeParams',function($scope,Posts,$routeParams){
	 //Get posts via a service called 'Posts'
	Posts.getPosts();
	var promise = Posts.returnPromise();
	promise.then(success, error);
	 function success(response)
	 {
		 $scope.posts = response.data;
		 //console.log($scope.posts);
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
	//Add a new commentl
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
  $scope.nextId = $scope.id + 1;
  $scope.parsePlus = function(json, n)
  {
    var count = Object.keys($scope.posts).length;
    if(json < count-1)
      return json+n;
    else
      return json;
  }
  $scope.parseMinus = function(json, n)
  {
    if(json > 0)
      return json-n;
    else
      return json;

  }
 }]);

 app.config(function($routeProvider){
	 $routeProvider
		.when("/view1",{
			controller:"MainController",
			templateUrl:"/pk/AngularJS Blog/scripts/views/home.html"
		})
		.when("/post/:id",{
			controller:"MainController",
			templateUrl:"/pk/AngularJS Blog/scripts/views/postview.html"
		})
		.otherwise({redirectTo:'/view1'});
 });
