var total_li=document.getElementsByClassName('item-menu');
console.log(total_li);

var elem1=document.getElementById('menu1')
elem1.addEventListener("click",tarea1)

function tarea1(){
	// para agregar una clase debo usar el metodo add de la propiedad classList
	quitarActivo();

	elem1.classList.add("activo");
	//elem2.classList.remove("activo");
	//elem3.classList.remove("activo");
}

var elem2=document.getElementById('menu2')
elem2.addEventListener("click",tarea2)

function tarea2(){
	// para agregar una clase debo usar el metodo add de la propiedad classList
	quitarActivo();
	elem2.classList.add("activo");
}


var elem3=document.getElementById('menu3')
elem3.addEventListener("click",tarea3)

function tarea3(){
	// para agregar una clase debo usar el metodo add de la propiedad classList
	quitarActivo();
	elem3.classList.add("activo");
}

function quitarActivo(){
	var limite=total_li.length;
	for(var i=0;i<total_li.length;i++)
	{
		total_li[i].classList.remove("activo")
	}
	//elem1.classList.remove("activo");
	//elem2.classList.remove("activo");
	//elem3.classList.remove("activo");
	

	
}

var fotoprincipal=document.getElementById("fotoprincipal");


var min1=document.getElementById("miniatura1")
min1.addEventListener("click",cargarFoto1)

function cargarFoto1(){
	fotoprincipal.setAttribute("src","img/foto1.jpg")
		limpiarMiniaturas();
	min1.classList.add("activo-minuatura")
}



var min2=document.getElementById("miniatura2")
min2.addEventListener("click",cargarFoto2)

function cargarFoto2(){
	fotoprincipal.setAttribute("src","img/foto2.jpg")
		limpiarMiniaturas();
	min2.classList.add("activo-minuatura")

}


var min3=document.getElementById("miniatura3")
min3.addEventListener("click",cargarFoto3)

function cargarFoto3(){
	fotoprincipal.setAttribute("src","img/foto3.png")
	limpiarMiniaturas();
	min3.classList.add("activo-minuatura")

}
function limpiarMiniaturas(){
	min1.classList.remove("activo-minuatura")
	min2.classList.remove("activo-minuatura")
	min3.classList.remove("activo-minuatura")

}



