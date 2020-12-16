//Nombre, DNI, CP, TLF, Matricula

var datos= "Javi 608987123 47400 12345678S 3256SLC, 78245 Pepe 8965PER 986547321 12312312V, 369852147 98745 Rick 8745LRT 98745632P, 6547PRT 89654 983656514 Orson 14785236Q, 87321 Luca 4521PSG 789456120 12365070E"

var arrayD = datos.split(","); //Aqui convertimos la cadena en un array.
//console.log(arrayD);


nombre=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
dni=/^\d{8}[A-Z]$/;
cp=/^[0-9]{5}$/;
tlf=/^[679][0-9]{8}$/;
matricula=/^[0-9]{4}[A-Z]{3}[^AEIOU]{3}$/;

for (var i=0; i<arrayD.length;i++){
    for(var j=0; j<arrayD.length; j++){
        arrayD[i][j].sort(nombre,dni,cp,tlf,matricula);
    }
}
console.log(arrayD);

/*
var arrayCompleto = new Array[4][4];

for(var i=0; i<25; i++) {
    arrayCompleto[i] = arrayD.push(i);
}

//if(dni.text(arrayCompleto[i]))
console.log(arrayCompleto);
*/