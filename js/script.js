var inputGanhoMes = document.querySelector("#ganho-mes");
/*inputGanhoMes.addEventListener("change",function () {
    console.log(inputGanhoMes.value)

    Olhar no console o resultado

})*/

var inputHorasDia = document.querySelector("#horas-dia");
/*inputHorasDia.addEventListener("change",function () {
    console.log(inputHorasDia.value)

    Olhar no console o resultado

})*/

var resposta = document.querySelector("#resposta");

function calcularValorHora(){
    var horasTrabalhadas = inputHorasDia.value * 22;
    console.log(horasTrabalhadas)
    
    var ganhoHora = inputGanhoMes.value / horasTrabalhadas;
    console.log(ganhoHora)

    return resposta.innerHTML = "R$ " + ganhoHora.toFixed(2);
}