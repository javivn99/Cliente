//objetos_21.js - Generadores: Básico
//Esto no es muy importante saberlo ya que despues vienen los generadores automaticos y mejores.

//Ejemplo1
function* generador1() {
    contador = 1;
    while(true)
        yield contador++;
}
/*
    yield: Es una especia de return que para y reanuda la llamada almacenando el nuevo valor.
    Sirve para pausar y reanudar una funcion generadora. Solo se usa con funciones asterisco.
*/
/********************************/
/*
    La declaración function* (la palabra clave function seguida de un asterisco) define una función generadora, que devuelve un objeto Generator.
    También puedes definir funciones generadoras usando el constructor GeneratorFunction y una function* expression.
*/

console.log("EJEMPLO1 -- CUENTA HASTA 3");
var gen = generador1();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


//Ejemplo2
function* generador2(inicio,fin) {
    contador = inicio;
    while(contador<=fin){
        yield contador++;
    }
}

console.log("\n\nEJEMPLO2 -- CUENTA DEL 5 AL 27");
var gen = generador2(5,27);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


var i;
do {
    i = gen.next();
    if(!i.done)
        console.log(i.value);
} while(!i.done)
