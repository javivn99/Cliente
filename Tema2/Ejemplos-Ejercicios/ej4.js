    /*
    Simular nuestro paso por el ribera de castilla en cuanto a exp.academico.
    Simular cada una de las convocatorias que estamos aqui. 2 por año. Junio, Septiembre. Marzo, Junio.
    Simular todos los examenes con nota de 0 a 10. 5 aprobado.
    Partimos desde 2019. La simulacion acaba cuando todos tenemos el titulo.
    Examinandonos, aprobando, pasando de curso.
    El examen es un numero random de 0 a 10. 

    */

    function Estudiante(nombre) {
        this.nombre = nombre;
    }

    modulosPrimero = {
        "programacion" : {
            nota=0,
            horas_semanales=9
        }
    }