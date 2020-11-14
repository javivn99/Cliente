 /* Simular una concatenacion inversa de elementos con parametros rest. */

 function funcion(...ncompleto) {
    var c = "";
    for (let i=ncompleto.length-1;i>=0; i--){
        c += ncompleto[i] + " ";
    }
    return c;
}
console.log(funcion("Javier","Velazquez","Nieto"));