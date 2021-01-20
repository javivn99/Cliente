//lenguaje_20.js - Operador ternario

var resultado;

resultado=(true)?"Es verdadero":"Es falso";
console.log(resultado);

resultado=(4>7)?"mayor":"menor";
console.log("4 es " + resultado + " que 7");

/*
    Es como un if else simplificado. Si lo que va entre parentesis es true. En la variable se almacena lo que esta
    a la izquierda de los 2 puntos. Si es falso se guarda lo que esta a la derecha.
    Es igual que :
    if (4<7){ 
        console.log("4 es menor que 7");
    } else {
        console.log("4 es mayor que 7");
    }

*/

edad=19;
ley=(edad>=18)?"Eres mayor de edad":"Eres menor de edad";
console.log(ley);

sexo="MasCulIno";
genero=(sexo.ignorecase == "masculino".ignorecase)?"Eres un hombre":"Eres una mujer";
console.log(genero);