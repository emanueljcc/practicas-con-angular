var app = angular.module("Practica3",["ngStorage"]);
app.service("ServicePractica",function($localStorage,$sessionStorage,$http){

	if ($localStorage.listalista) {
		this.tarea = $localStorage.listalista;
	}else{
		this.tarea = [];
	}

	this.crear = function(newTarea){
		this.tarea.push(newTarea);
		this.actualizar();
	}

	this.actualizar = function(){
		$localStorage.listalista = this.tarea;	
	}

	this.borrarTodo = function(){
		this.tarea = [];
		this.actualizar();

	}

	this.unoAuno = function(item){
		this.tarea = this.tarea.filter(function(tarea){
			return tarea !== item;
		});
		this.actualizar();
		return this.consulta();

	}

	this.consulta = function(){
		return this.tarea;
	}

});

app.controller("PracticaController",function($scope,ServicePractica){
	
	$scope.tarea = ServicePractica.consulta();
	$scope.nuevaTarea = {};
	$scope.crearTarea = function(){
		ServicePractica.crear($scope.nuevaTarea);
		$scope.nuevaTarea = {};
	}

	$scope.unoAunoController = function(todaFila){
		$scope.tarea = ServicePractica.unoAuno(todaFila);
	}

	$scope.limpiar = function(){
		ServicePractica.borrarTodo();
		$scope.tarea = [];	
	}
});




















