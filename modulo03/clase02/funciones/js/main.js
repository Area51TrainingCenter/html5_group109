
// creacion de funciones
function sumar(){

}
//llamado de una funcion sin parametros
//sumar();
//llamado de una funcion con parametros
//sumar(10,30);
//sumar(5,20);



//llamado a una funcion con retorno

var igv=calcular_igv(2130);
console.log(igv);

// funcion sin parametros
function sumar(){
	var suma=10+20;
	console.log(suma);
}
// funcion con parametros
function sumar(valor1,valor2){
	var suma=valor1+valor2;
	console.log(suma);
}
// funcion sin retorno
function imprimir_bienvenida(){

}

// funcion con retorno
function calcular_igv(monto){
 	var igv=monto*0.18;
 	return igv;
}


function imprimir(valor){
	console.log(valor)
}




imprimir("Bienvenido a JS");



var nombreMes=mesdelanio("Ingles");
console.log(nombreMes);



function mesdelanio(idioma){

	var date=new Date();
var indiceMes=date.getMonth();
	var meses;
	if(idioma=="Espanol"){
		 meses=[	"Enero",
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
	}
	else if(idioma=="ingles"){
		
		 meses=["Enero",
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
	}
		

		return meses[indiceMes];

}











