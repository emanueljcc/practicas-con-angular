angular.module("ListaApp",["ngStorage"])


.factory("ListaService",function($localStorage, $sessionStorage){
	var listaService = {};

	//listaService.key = "angular-lista";
	if($sessionStorage.localLista){
		listaService.actividad = $sessionStorage.localLista;
	}else{
		listaService.actividad = [];
	}	

	listaService.add = function(nuevaEntrada){
		listaService.actividad.push(nuevaEntrada);
		listaService.updateStorage();
	};
	listaService.updateStorage = function(){
		$sessionStorage.localLista = listaService.actividad;
	};
	listaService.limpiar = function(){
		listaService.actividad = [];
		listaService.updateStorage();
		return listaService.obtenerTodo();
	};
	listaService.obtenerTodo = function(){
		return listaService.actividad;
	};
	listaService.eliminar = function(item){
		listaService.actividad = listaService.actividad.filter(function(actividad){
			return actividad !== item;
		});
		listaService.updateStorage();
		return listaService.obtenerTodo();

	}


	return listaService;
})







.controller("ListaController",function($scope,ListaService){

	$scope.todos = ListaService.obtenerTodo();
	$scope.nuevaEntrada = {};
	$scope.agregarNuevo = function(){
		ListaService.add($scope.nuevaEntrada);
		$scope.nuevaEntrada = {};
	}
	$scope.remover1a1 = function(todo){
		$scope.todos = ListaService.eliminar(todo);
	}
	$scope.limpiar = function(){
		$scope.todos = ListaService.limpiar();
	}


})


.filter("limpiaHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})