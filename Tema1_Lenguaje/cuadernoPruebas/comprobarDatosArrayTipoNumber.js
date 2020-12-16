//Comprobar que todos los elementos de un array son de tipo Number.
numeros =[0,1,2,3,4,5,5,6,"0987",7,0,123,"Hola",12344,567];

for (var i =0; i<numeros.length; i++){
    if (isFinite(numeros[i])){
        console.log("El numero de la posicion " +i+ " is a number.");
    } else {
        console.log("El numero de la posicion " +i+ " is not a number.");
    }
}