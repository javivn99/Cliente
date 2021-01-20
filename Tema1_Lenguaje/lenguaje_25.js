//lenguaje_25.js - break y continue
			
var i=1;

console.log("PRIMER BUCLE");
while(i<=10) {
	if(i==5)
		break;
	console.log(i);
	i++;
}


i=1;
console.log("SEGUNDO BUCLE");
while(i<=10) {
	i++;
	if(i==5)
		continue;
	console.log(i);
	//i++; //Bucle infinito si se incrementa al final
}

/* 
	Cuando un continue se ejecuta en una iteracion lo que hace es que una vez i=5 no sigue para abajo sino que vuelve
	a comenzar la ejecucion. No imprime el 5 por eso mismo, porque si i=5 no llega al console, sino
	que vuelve arriba y ya pasa al 6.
*/


i=1;
console.log("TERCER BUCLE");
while(i++<=10) {
	if(i==5)
		continue;
	console.log(i);
}


i=1;
console.log("CUARTO BUCLE");
while(++i<=10) {
	if(i==5)
		continue;
	console.log(i);
}