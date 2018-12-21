
/*
var ele=document.getElementById('menu1');

var elementos=document.getElementsByTagName('li')
var elementos=[li,li,li];

elementos[0].addEventListener("click",tarea)
elementos[1].addEventListener("click",tarea)
elementos[2].addEventListener("click",tarea)


$(".header-site nav ul li")
*/




/*
var title=document.getElementById('title'); // $("#title")
title.addEventListener("click",tarea) // $("#title").click()
function tarea(){

}*/
/*
$("#title").click(tarea)
function  tarea(){

}
*/
/*
$("#title").click(function (){
	console.log("codigo aquí");
})*/


$("#title").click(tarea)
function tarea(){
console.log("codigo aquí");	
}

/*
var elementos=document.getElementsByTagName('li')
var elementos=[li,li,li];

elementos[0].addEventListener("click",tarea)
elementos[1].addEventListener("click",tarea)
elementos[2].addEventListener("click",tarea)
*/
/*
$(".header-site nav ul li").click(function(){
	alert("click");
})*/
/*
$(".header-site nav ul li").click(opcionmenu)

function opcionmenu(){
	alert("click");
}
*/

$(".header-site nav ul li").click(function(){
	$(".header-site nav ul li").removeClass("activo");
	$(this).addClass("activo");
	//alert("click");
})

/*
$(".listado-opciones li").click(function(){
 	alert("click");
})*/
/*$(".listado-noticias").click(function(){
	$(".listado-opciones li").removeClass("activo")
	$(this).addClass("activo")
	$(".info-deportes").removeClass("mostrar");
	$(".info-noticias").addClass("mostrar");

})


$(".listado-deportes").click(function(){
	$(".listado-opciones li").removeClass("activo")
	$(this).addClass("activo")
	$(".info-noticias").removeClass("mostrar")
	$(".info-deportes").addClass("mostrar");
})*/

$(".listado-opciones li").click(function(){
	$(".listado-opciones li").removeClass("activo");
	$(this).addClass("activo")
	var id_elemento=$(this).attr("id")
	$(".item").addClass("ocultar");
	
	switch(id_elemento){
		case "not":
			// 
			$(".info-noticias").removeClass("ocultar");
			break;
		case "dep":
			//
			$(".info-deportes").removeClass("ocultar");
			break;
		case "mod":
			// codigo
			$(".info-moda").removeClass("ocultar");
			break;
		case "mus":
			$(".info-musica").removeClass("ocultar");
			break;
		case "autos":
			$(".info-autos").removeClass("ocultar");
			break;
		default:
			break;

	}

})

/*
$("#menu1").click(function(){
	alert("le di click, al primer elemento")
})
$("#menu2").click(function(){
	alert("le di click, al 2do elemento")
})
$("#menu3").click(function(){
	alert("le di click, al 3er elemento")
})*/

