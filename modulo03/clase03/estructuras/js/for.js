

console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
console.log("6")
console.log("7")
console.log("8")
console.log("9")
console.log("10");

// el primer parametro del for se ejecuta una sola vez
// la estructura se va a repetir en la medida que la condicion sea verdadera

for(var i=0;i<500;i++){
	
	console.log(i)
	// al terminar la estructura se ejecuta el 3er parametro
}

var alumnos=["juan","diego","martín","carlos"]

console.log(alumnos[0])
console.log(alumnos[1])
console.log(alumnos[2])
console.log(alumnos[3])

for(var i=1;i<4;i++){
	console.log(alumnos[i]);
}

for (var i =1; i <13; i++) {
	//var mul=i*1;
	//console.log(i + " x 1 = " +mul)
	for(var j =1;j<12;j++){
		var resl=i*j;
		console.log(i + " x " + j + " = " + resl )
	}
}








