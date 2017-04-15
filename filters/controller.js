angular.module("MenuApp",[])
.filter("removeHtml",function(){
	return function(texto){ //rmover etiquetas HTML
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})
.controller("MenuController",function($scope){
	$scope.mi_html = "<p>Hola Mundo</p>"
})