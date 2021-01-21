//lenguaje_33 - Ejercicio de arrays: Obtener elemenos sin repetir y ordenados
//Partiendo del array [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1] crear un nuevo array con los elementos de array original sin repetir y ordenado.

var numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
var num;
var nuevoArray = [];

while(numeros.length>0){
    num = numeros.pop();
    if(nuevoArray.indexOf(num) == -1){
        nuevoArray.push(num);
    }
}

nuevoArray.sort();
console.table(nuevoArray);

console.log(Array.isArray(num));

//LLego en la 36
