angular.module("ChildApp",[])
.run(function($rootScope){
	$rootScope.nombre = "Emanuel";
})
.controller("ChildController",function($scope){
	$scope.nombre = "Emma";
	setTimeout(function(){
		$scope.$apply(function(){

			$scope.nombre = "lol";
		});
	},1000);
})
.controller("OtroController",function($scope){

});