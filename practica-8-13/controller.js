angular.module("ListaApp",["LocalStorageModule"])
.controller("ListaController",function($scope,localStorageService){
	

	if(localStorageService.get("lista")){
		$scope.todos = localStorageService.get("lista");
	}else{
		$scope.todos = [];
	}

	$scope.$watchCollection('todos',function(nuevoValor,viejoValor){
		localStorageService.set("lista",$scope.todos);
	});
	
	
	//$scope.nuevaEntrada = {};
	
	console.log($scope.todos);

	$scope.agregarNuevo = function(){
		$scope.todos.push($scope.nuevaEntrada);
		$scope.nuevaEntrada = {};
	}

})
.filter("limpiaHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})