//Pide una nota (número). Muestra la calificación según la nota:
var nota=11;
if (nota<=10 && nota>=0){
    if(nota>=9){
        console.log("Sobresaliente");
    } else if (nota>=7){
        console.log("Notable");
    } else if (nota>=6){
        console.log("Bien");
    } else if (nota>=5){
        console.log("Suficiente");
    } else if (nota>=3){
        console.log("Insuficiente");
    } else if (nota<3){
        console.log("Muy deficiente");
    }
} else {
    console.log("Error mi loco no esta entre 0 y 10")
}