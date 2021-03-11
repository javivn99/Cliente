document.getElementById("numero").value.onchange = function() {enviarNumero()};

var num = document.getElementById("numero")

function enviarNumero(num) {
    var numeros = {num};

    numeros.numero = num;

    var numerosInfo = JSON.stringify(numeros);
    localStorage.setItem("numeros", numerosInfo);
}