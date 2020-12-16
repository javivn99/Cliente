//lenguaje_57.js - Ejercicio de cadenas: Primera letra de cada palabra a mayúsculas

var texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";
var tFinal = "";
var lista = texto.split(" ");


for(i=0;i<lista.length;i++) {
	tFinal += lista[i].charAt(0).toUpperCase() + lista[i].slice(1) + " ";
	/* EXPLICACION DE LA SENTENCIA ANTERIOR
		-lista[i].charAt(0).toUpperCase(): La palabra de la posicion [i] coge el caracter de la posicion 0 y la pone en mayusculas.
		-lista[i].slice(1): Toma un “trozo” de un array, indicado por un índice de inicio y un índice final (no incluido). 
		Slice no modifica el array original y hace una copia “superficial” y le pone un espacio entre palabras.

		Ambos juntos hacen que la primera letra se ponga en mayusculas y slice va copiando en el array tFinal el resultado de eso.

	*/
}

console.log(texto);
console.log("*************");
console.log(tFinal);