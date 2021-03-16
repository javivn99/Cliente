/*DEFINIR OBJETO COCHE Y OBJETO MOTO. FUNDIRLOS EN OBJETO VEHICULO QUE CONTENGA LAS PROPIEDADES DE AMBOS*/

var coche = {
    nombre:"Opel",
    ruedas:4,
    peso:1500,
    color:"Azul",
};

var moto = new Object();
moto.tipo="Carretera";
moto.frenos="Disco";
moto.cilindrads="450cc";
moto.asientos=1;

var vehiculo = new Object();

/*ARRAYS CON EL NOMBRE DE LAS CLAVES DE COCHE Y DE MOTO*/
var prop_coche = Object.keys(coche);
var prop_moto = Object.keys(moto);

/*BUCLES DONDE METO LAS PROPIEDADES DE COCHE Y DE MOTO*/
prop_coche.forEach(x => vehiculo[x] = coche[x]);
prop_moto.forEach(x => vehiculo[x] = moto[x]);

/*SALIDA POR PANTALLA*/
var prop_vehiculo = Object.keys(vehiculo);
console.log("PROPIEDADES DEL VEHICULO");
prop_vehiculo.forEach(x => console.log(x + " --> " + vehiculo[x]));

