 angular.module("services",[])
	.service("Posts",['$http','$q',function($http,$q){
		var defer=$q.defer();
		this.getPosts=function()
		{
			$http.get("/pk/AngularJS Blog/scripts/vendor/posts.json")
				.then(success,error);
		};
		function success(response)
		{
			defer.resolve(response);
		}
		function error(err)
		{
			defer.reject(err);
		}
		this.returnPromise = function()
		{
			return defer.promise;
		};
	}]);
