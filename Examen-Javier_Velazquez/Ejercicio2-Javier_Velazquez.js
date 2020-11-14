/* ENUNCIADO
    Crear un fichero JS que modifique unos datos en formato JSON (datos.json).
    El JSON consta de un array de solicitudes (15) para 3 plazas. Los campos de cada solicitud son:
    codigo, nombre, fechanac, notaExpediente, admitido, causaExclusion. Los formatos se entienden visulizando el JSON

    Las solicitudes al final deben estar en estado con admitido a true o a false dependiendo de diversas
    circunstancias. Una solicitud no se admite si:

        -> El formato de fecha esta mal (debe ser dias-mes-año cpn 1 o 2 digitos para el dia y mes y 4 para el año)
        -> No se trata de una persona nacida entre el año 2000 y 2005
        -> El formato de la notaExpediente esta mal. Se deben dejar siempre dos digitos decimales 
        -> La nota no esta entre 0 y 10
        -> No le llega la nota atendiendo al numero de plazas ya que se asignan por nota de expediente. Solo se admitiran las 3 mejores notas.

    Estas condiciones de error deben indicarse en el campo causaExclusion(al menos una si se cumple mas de una condicion de error).
    El resultado final debe devolver el JSON modificado con los admitidos y las causas de exclusion. Se puede hacer un console.table
    del array para una mejor visualizacion.


    Se evalua el formato de fecha y nota y sus valores posibles correctamente -> 1p
    Se asigna correctamente el campo admitido -> 1p
    Se asigna correctamente el campo exclusion  -> 1p
    Se asigna correctamente los admitidos atendiendo al expediente -> 1.5p
    Se devuelbe el JSON modificado -> 0,5p

*/

var jsonSolicitudes = '{"solicitudes":[\
    {"codigo":0, "nombre":"Luis    ","fechanac":"4-7-2005","notaExpediente":"7.5","admitido":"","causaExclusion":""},\
    {"codigo":1, "nombre":"Marta   ","fechanac":"3-8-2003","notaExpediente":"15.52","admitido":"","causaExclusion":""},\
    {"codigo":2, "nombre":"Ana     ","fechanac":"1-7-1998","notaExpediente":"8.60","admitido":"","causaExclusion":""},\
    {"codigo":3, "nombre":"Maria   ","fechanac":"2000-9-3","notaExpediente":"7.92","admitido":"","causaExclusion":""},\
    {"codigo":4, "nombre":"Juan    ","fechanac":"6-2-2003","notaExpediente":"8.12","admitido":"","causaExclusion":""},\
    {"codigo":5, "nombre":"Jorge   ","fechanac":"9-1-2000","notaExpediente":"9.14","admitido":"","causaExclusion":""},\
    {"codigo":6, "nombre":"Antonio ","fechanac":"6-3-2004","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":7, "nombre":"Susana  ","fechanac":"9-7-2001","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":8, "nombre":"Fernando","fechanac":"2-2-2002","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":9, "nombre":"Alvaro  ","fechanac":"3-1-2001","notaExpediente":"7.58","admitido":"","causaExclusion":""},\
    {"codigo":10,"nombre":"Manuel  ","fechanac":"9-1-2003","notaExpediente":"9.16","admitido":"","causaExclusion":""},\
    {"codigo":11,"nombre":"Jaime   ","fechanac":"6-3-2005","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":12,"nombre":"Monica  ","fechanac":"9-7-2004","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":13,"nombre":"Lucia   ","fechanac":"2-2-2003","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":14,"nombre":"Federico","fechanac":"4-1-2004","notaExpediente":"7.58","admitido":"","causaExclusion":""}\
    ]};';


