
$("#btn-grabar").click(function(){
	var nombre=$("#inp-nombre").val();
	var apellidos=$("#inp-apellidos").val();
	//$("#text-nombre").interHTML(nombre)
	$("#text-nombre").text(nombre + " "+ apellidos);
})