angular.module("TodoList",["LocalStorageModule"])
.controller("TodoController",function($scope,localStorageService){

	if(localStorageService.get("lista-angular")){
		$scope.todo = localStorageService.get("lista-angular");
	}else{

		$scope.todo = [];
	}

	$scope.$watchCollection('todo',function(nuevoValor,viejoValor){

		localStorageService.set("lista-angular",$scope.todo);
	})
	$scope.nuevaTarea = {};
	console.log($scope.todo);
	$scope.agregarTarea = function(){
		$scope.todo.push($scope.nuevaTarea);
		$scope.nuevaTarea = {};
	}
	
});