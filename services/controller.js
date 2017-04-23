angular.module("ListaApp",["ngStorage"])


.service("ListaService",function($localStorage, $sessionStorage){

	if($sessionStorage.localLista){
		this.actividad = $sessionStorage.localLista;
	}else{
		this.actividad = [];
	}	

	this.add = function(nuevaEntrada){
		this.actividad.push(nuevaEntrada);
		this.updateStorage();
	};
	this.updateStorage = function(){
		$sessionStorage.localLista = this.actividad;
	};
	this.limpiar = function(){
		this.actividad = [];
		this.updateStorage();
		return this.obtenerTodo();
	};
	this.obtenerTodo = function(){
		return this.actividad;
	};
	this.eliminar = function(item){
		this.actividad = this.actividad.filter(function(actividad){
			return actividad !== item;
		});
		this.updateStorage();
		return this.obtenerTodo();

	}

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