angular.module("CustomDirective",[])
.controller("AppController",function($scope,$http){
	$http.get("https://api.github.com/users/emanueljcc/repos")
	.then(function(data){
		$scope.repos = data.data;
		console.log($scope.repos);
	})
	.catch(function(error){
		console.log(error);
	});
});