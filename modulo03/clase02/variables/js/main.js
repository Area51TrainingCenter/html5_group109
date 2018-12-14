console.log("Mensaje desde archivo JS")
var nombre="Juan";
var apellido="Ramos"

var datos=["Juan",true,20];

var datos2=[nombre,apellido,20];

// acceder a los items de un arreglo , trabajo con los indices

// el elemento con indice 0 es el elemento con la posicion numero 1
console.log(datos[0])
console.log(datos[1])
console.log(datos[2])
// para el ejemplo no existe definido un elemento con el indice 3 (equivale a el elmento con la poscion numero 4 , el arreglo solo tiene 3 elementos)
console.log(datos[3]) 

var formatocsv="juan,ramos,profesor,2018"; 
var correo="carlos@gmail.com"
var cadenas=formatocsv.split(",");
// ["c","a","r","l","o","s","@","g","m","a","i","l",".","c","o","m"]
console.log(correo);
console.log(cadenas);
console.log(cadenas.indexOf("profesor"))
/*
var alumno="hola";
var ALUMNO="HOLA";
var Alumno="Hola";
console.log(alumno);
console.log(ALUMNO);
console.log(Alumno)
*/


var fecha=["13","12","2108"];
var fecha_junta=fecha.join("-")
console.log(fecha_junta);

var notas=[18,10,12];
console.log(notas);
var notaagregada=notas.push(19);
console.log(notas);
console.log(notaagregada);

/*
notas.pop();
console.log(notas);
notas.pop();
console.log(notas);
*/

console.log(notas.slice(1,3))




// variables de tipo objeto
// JSON  JAVA SCRIPT OBJECT NOTATION

var persona_=["juan",
			 "Ramos",
			 "998345938",
			 "correo@gmail.com"];

var persona={
	nombre:"Juan",
	apellido:"Ramos",
	telefono:"998345938",
	correo:"correo@gmail.com"
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.telefono);

persona.nombre="Juan Carlos";

console.log(persona.nombre)

console.log(persona);

var tel1={
	marca:"Samsung",
	precio:200,
	anio:"2019"
}

var tel2={
	marca:"Apple",
	precio:500,
	anio:"2018"
}

var tel3={
	marca:"Huawei",
	precio:190,
	anio:"2010"
}

var telefonos=[tel1,tel2,tel3];
console.log(telefonos[0].marca);
console.log(telefonos[1].marca);
console.log(telefonos[2].marca);















