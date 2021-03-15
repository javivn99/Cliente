/* ENUNCIADO
    Crear un fichero JS que permita simular las finanzas de personales
    de 5 personas. Estas personas tendran en sus finanzas un saldo inicial, un sueldo mensual
    y una deuda. Estos tres valores, y el nombre del titular se estableceran en los parametros
    de la funcion constructora del objeto. La funcion constructora de cada una de estas
    5 personas podria ser de la siguiente forma:

    function finanzasPersonales(titular, saldo, sueldo, deuda) {...}

    Cada 27 de cada mes se ajustan las finanzas de tal modo que en ese dia:
        -> Se cobra el sueldo
        -> Se descuentan los gastos mensuales --> Un nº aleatorio entre 700 y 900
        -> Se amortiza parte de la deuda --> Un nº aleatorio entre 100 y 400 (no nay intereses)

    La condicion de finalizacin de la simulacion es cuando todas las personas paguen su deuda partiendo de la fecha actual.
    El resultado final debe mostrar el titular, fecha de cancelacion de la deuda, saldo, deuda (tiene que ser 0; no valores negativos),
    los meses que ha tardado en pagarla lo que ha pagado cada mes de deuda y los gastos mensuales de cada mes.


    Crear un objeto adecuado -> 1p
    Ajustar finanzas a los 27 dias de cada mes -> 1,5p
    Simulacion correcta cumpliendo las condiciones de finalizacion -> 1,5p
    Se muestra el resultado final correctamente -> 1p

*/

var deuda = 1000;

function Persona(titular,saldo,sueldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.deuda_actual = 1000;
    this.meses = 1;
    this.sueldo = sueldo;
    this.amortizacionDeuda = 0;
    this.pagoMensual = new Array();
/*
titular, fecha cancelacion, saldo,deuda, meses que ha tardado en pagarla, pago mensual, gastos mensuales de cada mes
*/
    
    this.gestionar = function() {
        if(this.saldo>0) {
            var gastoMensual = Math.floor(Math.random()*(900 - 700) + 700);
            this.saldo+=sueldo;
            var amortizacionDeuda = Math.floor(Math.random()*(400 - 100) + 100);
            this.amortizacionDeuda+=amortizacionDeuda;
            this.deuda_actual-=amortizacionDeuda;
            this.saldo = this.saldo - gastoMensual - amortizacionDeuda;
            this.meses+=this.meses;
        }
    }
}

var personas = [];

personas.push(new Persona("Patxi",12000,1600));
personas.push(new Persona("Rick",3000,450));
personas.push(new Persona("Ana",5200,825));
personas.push(new Persona("Emma",1300,255));
personas.push(new Persona("Raul",100155,8000));

while (personas.every(y => y.amortizacionDeuda < deuda)) {

    if(personas.every(x => x.saldo<=0)) {
        console.log("NINGUNO PUEDE PAGAR SU DEUDA");
        break;
    }

    personas.some(x => {
        if(x.deuda_actual < deuda) {
            x.pagoMensual.push(x.amortizacionDeuda);
        }
    });

    personas.forEach(x => {x.gestionar();});
    
}

personas.forEach(x => {
    if(x.saldo<0) {
        console.log(x.titular + " NO PUEDE PAGAR SU DEUDA");
    }
});   

console.table(personas);