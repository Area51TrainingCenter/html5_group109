//console.log("Bienvenido a JS desde la consola");

// sintaxis
/*echo "hola";
system.out.print("hola");
console.log("hola")
cout<<"hola";
print "hola";
*/
// palabras reservadas

// variables

var dato;
var dato2;

/*var Int dato;
var String dato;
var double dato;
*/
dato="juan Carlos";
dato2="Ramos Torriccelli";
/*console.log("dato");*/
/*

console.log(dato);
console.log(dato2);
*/

var nombre;
nombre="JC";
/*console.log(nombre);*/


//alert("Bienvenido");
/*nombres
apellidos
telefono
edad
*/
var nombre="JC";
var apellidos="RT";
var telefono="987123234";
var edad=23;


/*
console.log(nombre);
console.log(apellidos);
console.log(telefono);
console.log(edad);
*/

var num1=192;
var num2=203;
var numerico1=String(num1);
var numerico2=String(num2);

var suma=numerico1+numerico2;
//console.log(suma);


var estado=true;
var estado=false;
var estado=0; // false
var estado=1; // true




// conociendo las cadenas de texto


var texto1="juan Carlos";
console.log("conciendo más sobre las cadenas de textos");
console.log(texto1);
console.log(texto1.length);
console.log(texto1.split(" "));
console.log(texto1.indexOf("@"));
console.log(texto1.replace("juan","Martín"))
// metodos de JS
// https://www.w3schools.com/js/js_string_methods.asp


var num_1=10;
var num_2=30;
var num_3=100;


var numeroMayor=Math.max(num_1,num_2,num_3,500,123,2334,2314);
console.log(numeroMayor)
var numeroMenor=Math.min(num_1,num_2,num_3,500,123,2334,2314);
console.log(numeroMenor)
console.log(Math.round(10.69));
console.log(Math.ceil(5.01));
console.log(Math.floor(19.99));
//console.log(Math.PI)

var aleatorio=Math.random();

console.log(Math.round(aleatorio*100))


// variable de tipo fechas;
var meses=[	"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"]

var fecha="11/12/2018";

var nuevaFecha=new Date();
console.log(fecha);
console.log(nuevaFecha);
console.log(nuevaFecha.getFullYear());
console.log(nuevaFecha.getDate());
/*var indiceMes=nuevaFecha.getMonth();
console.log(meses[indiceMes]);*/
console.log(nuevaFecha.getMonth()+1);
console.log(nuevaFecha.getHours());
console.log(nuevaFecha.getMinutes());
console.log(nuevaFecha.getSeconds());

console.log(nuevaFecha.getDay());


// variable de tipo arreglo

var nombre1="juan"
var nombre2="Martin"
var nombre3="Carlos"

var nombres=["juan","Martin","carlos"];

//datos=["codigo","nick","codigoSalon","password","creditos"];

var datos=[123,"JC","0934","*asd93;M",29];

console.log(nombres[2]);

console.log(nombres.length);



console.log(meses[4])





