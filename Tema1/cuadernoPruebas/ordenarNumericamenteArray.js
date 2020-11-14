//Crear un metodo que ordene numericamente un array.

var ordenados = [4,7,8,1,3,2,5,9,6,0];

function ordenar () {
    return console.log(ordenados.sort((a , b) => a - b));
}
ordenar();
