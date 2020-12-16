//lenguaje_18.js - Operadores de comparación

console.log("NUMEROS");
v1=4;
v2=5;	
if(v1==v2){console.log("Sí");}else{console.log("No")};
if(v1>v2){console.log("Sí");}else{console.log("No")};
if(v1<v2){console.log("Sí");}else{console.log("No")};
if(v1>=v2){console.log("Sí");}else{console.log("No")};
if(v1<=v2){console.log("Sí");}else{console.log("No")};
if(v1!=v2){console.log("Sí");}else{console.log("No")};

console.log("CADENAS");
c1="hola";
c2="adios";
if(c1==c2){console.log("Sí");}else{console.log("No")};
if(c1!=c2){console.log("Sí");}else{console.log("No")};


console.log("COMPARADORES ESTRICTOS");
v1="3";
v2=3;
if(v1==v2){console.log("Sí");}else{console.log("No")};
if(v1===v2){console.log("Sí");}else{console.log("No")};

/*
    El triple igual significa que es igual como tipo (String, Number...) y como caracter (el 3 asi o "3" asi, por ejemplo)
    o como valor.
*/

v1="3";
v2=3; //Alternar con "3"
if(v1!=v2){console.log("Sí");}else{console.log("No")};
if(v1!==v2){console.log("Sí");}else{console.log("No")};