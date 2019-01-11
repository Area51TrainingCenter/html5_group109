$(window).load(function(){

	$("#incio").click(function(){
		 let  url="inicio.html";
		//let url="https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest";
		datos={
			dni:12312323,
			codigo:123
		}
		/*$(".contenido").load(url,datos,function(res,status){
			// res= lo que me devolvio
			//status= el estado de la peticion
			if(status=="success"){
				console.log("mi contenido se cargo con exito")
			}
			else{
				console.log("paso algo que no entendemos");
			}
		})*/
		$(".contenido").load(url);
		


	})


	$("#servicios").click(function(){
		let url="servicios.html"
		$(".contenido").load(url);	
	})

	$("#contacto").click(function(){
		let url="contacto.html"
		$(".contenido").load(url);
	})
})