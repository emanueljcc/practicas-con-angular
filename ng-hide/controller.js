angular.module("HideApp",[])
.controller("HideController",function($scope,$http){
	
	$scope.post = [];
	$scope.loading = true;

	$http.get("https://jsonplaceholder.typicode.com/posts")
	.then(function(data){
		//console.log(data);
		$scope.post = data.data;
		$scope.loading = false;
	})
	.catch(function(err){
		$scope.loading = false;
	})
})