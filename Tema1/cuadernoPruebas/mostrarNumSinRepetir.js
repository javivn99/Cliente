/* Que muestre todos los numeros pero sin repetirse */

    var numeros = [2,5,3,6,8,9,7,5,1,0,9,6,5,3];
    var numero;
    var nuevoArray = [];

    while(numeros.length>0) {
        numero = numeros.pop();
        if(nuevoArray.indexOf(numero)==-1) {

            nuevoArray.push(numero);
        }
    }
    nuevoArray.sort();
    console.log(nuevoArray);
