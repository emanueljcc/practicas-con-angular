angular.module("PrimerModulo",[])
.controller("PrimerController",["$scope","$http",function(s,$http){
	s.nombre = "Emanuel";
	s.arregloVacio = {};
	s.arreglo = [
		{
			comentario: "practica 1",
			usuario: "emanuel"
		},
		{
			comentario: "practica 2",
			usuario: "zoan"
		}
		
	];
	s.agregarArreglo = function(){
		s.arreglo.push(s.arregloVacio);
		s.arregloVacio = {};
	}
	

	s.array = [];
	$http.get("https://jsonplaceholder.typicode.com/posts")
	.then(function(data){
		s.lols = data.data;
	});



	s.posts = [];
	s.nuevoPost = {};
	s.agregarPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title: s.nuevoPost.title,
			body: s.nuevoPost.body,
			userId: 1
		})
		.then(function(data,status,headers,config){
			s.posts.push(s.nuevoPost);
			s.nuevoPost = {};
		})
		.catch(function(data,status,headers,config){
			console.log(error);
		});
	}


}]);











