var cadena="jvn.1999@hotmail.com";
codigoPostal=/^[0-9]{5}$/;
matriculaNueva1=/^[0-9]{4}[A-Z]{3}$/;
matriculaNueva2=/^[0-9]{4}[^AEIOU]{3}$/;
matriculaVieja=/^[A-Z]{1,2}\d{4}[A-Z]{1,2}$/;
dni=/^\d{8}[A-Z]$/;
movil=/^[679][0-9]{8}$/;
email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
/* ESTE NO ADMITE NUMEROS
    \w: Una letra. ([\.-]?\w+)*@\w: Puede haber 0 o 1 puntos o guiones y despues mas letras. Todo ello 1 o mas veces. Despues ya llegaria el @ y despues letras.
    ([\.-]?\w+)*: Empieza por 1 o mas letras y  lo que puede venir despues son letras o puntos.
*/
email2=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
email3=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
direccionIP=/^(\d{1,3}\.){3}\d{1,3}$/
direccionMAC=/^([0-9,ABCDEF]{2}:){5}[0-9,ABCDEF]$/


console.log("Codigo postal: " + codigoPostal.test(cadena));
console.log("Matricula nueva: " + (matriculaNueva1.test(cadena) && matriculaNueva2.test(cadena)));
console.log("Matricula vieja: " + matriculaVieja.test(cadena));
console.log("DNI: " + dni.test(cadena));
console.log("Movil: " + movil.test(cadena));
console.log("Email1: " + email1.test(cadena));
console.log("Email2: " + email2.test(cadena));
console.log("Email3: " + email3.test(cadena));
console.log("Direccion IP: " + direccionIP.test(cadena));
console.log("Direccion MAC: " + direccionMAC.test(cadena));
