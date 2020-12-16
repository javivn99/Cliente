//EJERCICIO QUE CALCULE SUMA, RESTA, MULT, DIV EN FUNCION DE LO QUE NOSOTROS QUERAMOS.
//LA DIFICULTAD ERA ACABAR EL EJERCICIO CON LAS 2 ULTIMAS SENTENCIAS ESAS.

var operacion = "*";
var calcular;

switch (operacion) {
    case '+':
        calcular = function (a, b) { return a + b; }
        break;
    case '-':
        calcular = function (a, b) { return a - b; }
        break;
    case '*':
        calcular = function (a, b) { return a*b; }
        break;
    case '/':
        calcular = function (a, b) { return a/b; }
        break;
}
            
var resultado = calcular(8, 3);
console.log(resultado);
