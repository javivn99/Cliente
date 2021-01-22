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

var nom = Array.from("Javier");
console.log(nom);

var nomDel = Array.of("Javier");
console.log(nomDel);

//LLego en la 36

var multidimensional = [[1,2,3],["a","b","c"],[4,5,6],["d","e","f"]];
console.log(multidimensional.length);
console.log(multidimensional[1]);
console.log(multidimensional[1][2]);

function invertirNomb(...ncompleto){
    c = "";
    for(i=ncompleto.length-1;i>=0;i--){
        c += ncompleto[i] + " ";
    }
    return c;
}
console.log(invertirNomb("Javier","Velazquez","Nieto"));


var x=3;
var y=5;

function incremetar(a,b){
    a=8;
    b++;
    console.log("En la funcion a= " +a);
    console.log("En la funcion b = " +b);
}

console.log("ANTES");
console.log("a = "+x);
console.log("b = " +y);
console.log("LA FUNCION");
incremetar(x,y);
console.log("DESPUES");
console.log("a = "+x);
console.log("b = " +y);

var triangulo = function(base,altura){return (base*altura)/2}
console.log(triangulo(3,4));

//Llego en el 46