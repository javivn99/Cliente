//lenguaje_10.js - Diferencias entre var y let

console.log("VAR");
var x = 1;
if (true) {
	var x = 2; //MISMA VARIABLE
	console.log("X: " + x);
}
console.log("X: " + x);
/*
	Con var el valor de la variable termina es el ultimo que se le haya asignado, 
	en cambio con let, si tu asignas un valor, mantendra ese valor en todo el bloque
	en el que se encuentre.
*/

//let permite introducir lo que sería el ámbito de bloque
console.log("LET");
let y = 1;
if (true) {
	let y = 2; //DISTINTA VARIABLE
	console.log("Y: " + y);
}
console.log("Y: " + y);


//let no permite hacer hoisting
//console.log(z); // undefined
//let z = 1; //ERROR --> Cambiar let por var para que no se produzca un error
//console.log(z);