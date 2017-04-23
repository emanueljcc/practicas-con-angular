var app = angular.module("MiPrimeraApp",[]);

app.controller("PrimeraController",["$scope","$http",function(s,$http){
	//console.log(s);
	s.nombre = "Emanuel";
	s.nuevoComentario = {};
	s.comentarios = [
		{
			comentario:"tutorial",
			username:"codigo facilito"
		},
		{	
			comentario:"maloooo",
			username:"emanuel"
		}
	];
	s.agregarComentario = function(){
		s.comentarios.push(s.nuevoComentario);
		s.nuevoComentario = {};
	}
}]);

