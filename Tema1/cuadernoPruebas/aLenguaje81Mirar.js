//Generar numeros 8-4-4-4-12. Generar num entre el 0 y 15. En hexadecimal. (Ej 81)

console.log("uuid".toUpperCase);

var cantidad=10;
var uuid = "";
for (let num=1;num<cantidad;num++) {
    uuid = "{";
    for(i=0;i<32;i++) {
        if(i==8 || i==12 || i==16 || i==20)
            uuid += "-";
            uuid += Math.floor(Math.random() *16).toString(16).toString().toUpperCase();
            //Math.floor(Math.random() *16): Calculo un num aleatorio entre 0 y 15
            //toString(16).toString().toUpperCase(); : coniverto en hexadecimal, luego a cadena y luego a mayusculas

    }
    uuid += "}";
    console.log(uuid);
}