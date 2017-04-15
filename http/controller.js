angular.module("MiPrimeraApp",[])
.controller("PrimeraController",function($scope,$http){
	$scope.posts = [];
	$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function(data){
			$scope.posts = data.data;
		})
		.catch(function(error){
			if (error.status == 404) {
				alert('asdasdasd');
			}else if(error.status == -1){
				alert('no hay internet');
			}else{
				console.clear();
			}
		});

	$scope.nuevoPost = {};
	$scope.agregarPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title: $scope.nuevoPost.title,
			body: $scope.nuevoPost.body,
			userId: 1
		})
		.then(function(data,status,headers,config){
			$scope.posts.push($scope.nuevoPost);
			$scope.nuevoPost = {};
		})
		.catch(function(data,status,headers,config){
			console.log(error);
		});
	}	
});