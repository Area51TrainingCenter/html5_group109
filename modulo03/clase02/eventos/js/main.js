var opcionsumar=document.getElementById('opc-sumar');
//var otro=document.getElementsByClassName("")
//var otro2=document.getElementsByTagName('')
var tituloSite=document.getElementById("titulo-site");
var resultado=document.getElementById("resultado");

console.log(tituloSite);
console.log(opcionsumar);


function tarea(){
	var num1=10;
	var num2=20;
	var suma=num1+num2;
	resultado.innerHTML=suma
}

function limpiar(){
	resultado.innerHTML="";
}
opcionsumar.addEventListener("mouseenter",tarea)

opcionsumar.addEventListener("mouseleave",limpiar)
