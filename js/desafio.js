
var inputValorHora = document.querySelector("#valor-hora");

var inputHorasProjeto = document.querySelector("#horas-projeto");

var valor = document.querySelector("#resposta");

function calcular(){
    var valorTotal = inputValorHora.value * inputHorasProjeto.value
console.log(valorTotal)

    return valor.innerHTML = "R$ " + valorTotal.toFixed(2)
}