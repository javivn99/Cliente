//Cambia el año de una fecha dependiendo de si el dia es par o impar

var personasCadena = '[{"nombre":"Paco","fechanac":"1997-04-06"}, {"nombre""Ana","fechanac":"1978-08-17"}, {"nombre":"Juan","fechanac":"2001-24-12"}, {"nombre":"Antonio","fechanac":"1999-11-01"}, {"nombre":"Alfonso","fechanac":"1987-01-22"}, {"nombre":"Luis","fechanac":"1982-05-23"}]';


objeto = JSON.parse(personasCadena);
    
var objeto = JSON.parse(personasCadena, function  (key, value) {
    var fecha,anno,mes,dia;
    if (key=="fechanac") {
        fecha= new Date(value);
        anno = fecha.getFullYear().toString();;
        mes = fecha.getMonth()+1;
        dia = fecha.getDate();
        (dia%2==0) ? anno++ : ano--;

        if(fecha.getMonth()<10)
            mes = "0" + mes;
        if(fecha.getDate()<10)
            dia = "0" + dia;
        }
        if(fecha.getFullYear)
            
});

