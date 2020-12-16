/*
    Simular nuestro paso por el ribera de castilla en cuanto a exp.academico.
    Simular cada una de las convocatorias que estamos aqui. 2 por año. --> Junio, Septiembre (1º curso). Marzo, Junio (2º curso).
    Simular todos los examenes con nota de 0 a 10. 5 aprobado.
    Partimos desde 2019. La simulacion acaba cuando todos tenemos el titulo.
    Examinandonos, aprobando, pasando de curso.
    El examen es un numero random de 0 a 10. 

*/

function Estudiante(nombre) {
    this.nombre = nombre;
    this.convocatoria= 1;
    this.curso=1;
    this.nota=nota;

    this.aprobar= function() {
        if(this.convocatoria>1) {
            this.nota = Math.round(Math.random()*10);
            this.convocatoria += convocatoria;
        }
    }
}

modulosPrimero = {
    "programacion" : {
        nota=0,
        horas_semanales=9
    },
    "bases_de_datos" : {
        nota=0,
        horas_semanales=6
    },
    "sistemas" : {
        nota=0,
        horas_semanales=6
    },
    "entornos" : {
        nota=0,
        horas_semanales=3
    },
    "leguaje_de_marcas" : {
        nota=0,
        horas_semanales=4
    },
    "fol" : {
        nota=0,
        horas_semanales=3
    }
}

modulosSegundo = {
    "cliente" : {
        nota=0,
        horas_semanales=8
    },
    "servidor" : {
        nota=0,
        horas_semanales=9
    },
    "despliegue" : {
        nota=0,
        horas_semanales=4
    },
    "diseño" : {
        nota=0,
        horas_semanales=6
    },
    "empresa" : {
        nota=0,
        horas_semanales=3
    }
}


var alumnos = [];

alumnos.push(new Estudiante("Alberto",1,1));
alumnos.push(new Estudiante("El puma",1,1));
alumnos.push(new Estudiante("Federico",1,1));
alumnos.push(new Estudiante("Gabriel",1,1));
alumnos.push(new Estudiante("Javier",1,1));
alumnos.push(new Estudiante("Raul",1,1));
alumnos.push(new Estudiante("Sofia",1,1));
alumnos.push(new Estudiante("Diego",1,1));
alumnos.push(new Estudiante("Ines",1,1));
alumnos.push(new Estudiante("Emma",1,1));
alumnos.push(new Estudiante("Lucia",1,1));
alumnos.push(new Estudiante("Patxi",1,1));
alumnos.push(new Estudiante("Pablo",1,1));
alumnos.push(new Estudiante("Vicenta",1,1));
alumnos.push(new Estudiante("Evaristo",1,1));
alumnos.push(new Estudiante("Laura",1,1));
alumnos.push(new Estudiante("Felix",1,1));
alumnos.push(new Estudiante("Rober",1,1));
alumnos.push(new Estudiante("Alvaro",1,1));
alumnos.push(new Estudiante("Rick",1,1));
alumnos.push(new Estudiante("Emilio",1,1));