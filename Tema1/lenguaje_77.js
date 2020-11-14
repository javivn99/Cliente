//lenguaje_77.js - Obtener los días de la semana de tus siguientes cinco cumpleaños

var dia = 5;
var mes = 11;
var anyo = 2020;
var cumples = new Date(anyo,mes,dia);
var semana = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

for(i=1;i<=5;i++) {
	cumples.setFullYear(anyo+i); //setfullyear asigna el numero del año a anyo
	console.log("El año " + cumples.getFullYear() + " mi cumpleaños cae en " + semana[cumples.getDay()] + "\n"); //getday te da numero del 0 al 6. 0=Domingo
}