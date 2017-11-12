 app.directive("post",function(){
	return {
		restrict:'E',
		scope:{
			info:'=',
			index:'='
		},
		templateUrl:'/AngularJS Blog/scripts/directives/post.html',
		link: function(scope, element, attr)
		{
			scope.like = function()
			{
				scope.info.likes +=1;
			}
		}
	};
 });
