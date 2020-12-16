//Crear un objeto vacio y meterle propiedade.

var aula = {};

console.log(aula);

console.log(typeof(aula));

Object.defineProperty(aula, "numeroPupitres", {value:16, enumerable:true}); //hay que poner lo de enumerable:true sino no lo saca
aula.numeroAlumnos = 12;
Object.defineProperties(aula, {
    superficie:{
        value:60, enumerable:true
    },
    nombre:{
        value:"Informatica2", enumerable:false
    }
})

console.log("\n*****************\n");
console.log(aula);