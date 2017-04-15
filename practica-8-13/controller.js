angular.module("ListaApp",["ngStorage"])
.controller("ListaController",function($scope,$localStorage, $sessionStorage){
	

	if($sessionStorage.localLista){
		$scope.todos = $sessionStorage.localLista;
	}else{
		$scope.todos = [];
	}

	$scope.$watchCollection('todos',function(nuevoValor,viejoValor){
		$sessionStorage.localLista = $scope.todos;
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