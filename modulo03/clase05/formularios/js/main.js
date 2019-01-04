
// activar loading,
/*
$(document).ready(function(){
 	// aqui va el codigo a ejectuarse cuando se ejecuta el ready
 	// se ejecuta cuando se carga por completo el DOM (el html)
})

$(window).load(function(){
	//desactivar loading
	// aqui va el codigo a ejectuarse cuando se ejecuta el load
	// se ejecuta cuando se carga todo el contenido (html + imagenes + frames);

})*/
var listadoPersonas=[];
var eliminadoTemporal;
$(function(){

	

	$("#grabarDatos").click(function(){
		
		let inp_nombres=$("#inp_nombres").val();
		let inp_apellidos=$("#inp_apellidos").val();
		let inp_correo=$("#inp_correo").val();
		let inp_facebook=$("#inp_facebook").val();
		let inp_tipo=$("#inp_tipo").val();
		let persona={
				nombres:inp_nombres,
				apellidos:inp_apellidos,
				correo:inp_correo,
				facebook:inp_facebook,
				tipo:inp_tipo
			}

		let validacion=validarDatos(persona);
		
		if(validacion){
			$(".error").hide();
			agregarPersona(persona)
			limpiarInputs();
			mostrarPersonas();
		}else{
			$(".error").show();
		}

			
		

		
	
		// anula tu compartamiento previo 
		// en este caso al ser de tipo submit anula el submit del formulario
		//event.preventDefault();
	}) // end grabarDatos Evneto
	
	function agregarPersona(elemento){
		listadoPersonas.push(elemento);	
	}
	function limpiarInputs(){
		$("#inp_nombres").val("");
		$("#inp_apellidos").val("");
		$("#inp_correo").val("");
		$("#inp_facebook").val("");	
	}
	

	function validarDatos(elemento){
		var estado=false;
		if(elemento.nombre=="" || elemento.apellidos=="" || elemento.correo==""){
			estado=false;
		}
		else{
			estado=true;
		}
		return estado;
	}


	$("#inp_apellidos").focusout(function(){
		//$("#grabarDatos").click();
		$("#grabarDatos").trigger("click");
		//console.log("estas dejando el focus de el input de apellidos");
	})
})
function mostrarPersonas(){
		$(".bloqueListado").html("");
		listadoPersonas.forEach(function(elemento,indice){
			//console.log(elemento.nombres);
			//console.log(elemento.apellidos);
			//console.log(indice);
			//$(".bloqueListado").append('<article class="pt-2"><h2 class="h5 float-left">Nombres</h2><button class="btn btn-info float-right">Ver Detalle</button><div class="clearfix"></div></article>')
			$(".bloqueListado").append(`<article class="pt-2">
											<h2 class="h5 float-left"> `+elemento.nombres+ ` `+elemento.apellidos + `</h2>
											<button class="btn btn-info float-right " onclick="verDetalle(`+indice+`)">Ver Detalle</button>
											<button class="btn btn-danger float-right"  onclick="eliminarPersona(`+indice+`)" >Eliminar</button>
											<div class="clearfix"></div>
										</article>`)


		})
	}

function verDetalle(ind){
	console.log(ind)
	console.log(listadoPersonas[ind]);
	$(".detalle-persona").html(`<p>Nombres y apellidos: `+listadoPersonas[ind].nombres+ ` `+listadoPersonas[ind].apellidos+` </p>
				<p>Correo: `+listadoPersonas[ind].correo+`</p>
				<p>Facebook: `+listadoPersonas[ind].facebook+`</p>
				<p>Tipo: `+listadoPersonas[ind].tipo+`</p>`)
}

function eliminarPersona(ind){
	eliminadoTemporal=listadoPersonas.splice(ind, 1);
	mostrarPersonas()
	console.log(eliminadoTemporal);
}



// recomendacion
/*$(function(){
	$("#grabarDatos").click(function(){
		let inp_nombre=$("#inp-nombres").val();
		let persona={
			nombre:inp_nombre
		}
		agregarPersona(persona);
		
		listarPersonas();
	})	

})
var listadoPersonas=[];
function agregarPersona(objeto){
	listadoPersonas.push(objeto);
}

function listarPersonas(){
	$(".listadoPersonas").html("");
	listadoPersonas.forEach(function(elemento,indice){
		console.log(indice);
		console.log(elemento)
		$(".listadoPersonas").append(`<article class="pt-2">
						<h2 class="h5 float-left">`+elemento.nombre+`</h2>
						<button class="btn btn-info float-right">Ver Detalle</button>
						<div class="clearfix"></div>
					</article>`)

	})
}
*/

/*
// cuando todo el contenido este cargado
$(window).load(function(){



})

// cuando solo se carge el DOM 
$(document).ready(function(){

})*/
