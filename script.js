
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var resultado = document.getElementById("resultado")


function somar() {
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var res = n1 + n2

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('Erro! Um dos campos está vazio, por favor digite um número.')
    }else{
        resultado.innerHTML = `O resultado é: <br> ${n1} + ${n2} = <strong>${res}</strong>`
    }
}

function subtrair() {
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var res = n1 - n2

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('Erro! Um dos campos está vazio, por favor digite um número.')
    }else{
        resultado.innerHTML = `O resultado é: <br> ${n1} - ${n2} = <strong>${res}</strong>`
    }
}

function multi() {
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var res = n1 * n2

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('Erro! Um dos campos está vazio, por favor digite um número.')
    }else{
        resultado.innerHTML = `O resultado é: <br> ${n1} x ${n2} = <strong>${res}</strong>`
    }
}

function dividir() {
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var res = n1 / n2

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('Erro! Um dos campos está vazio, por favor digite um número.')
    }else{
        resultado.innerHTML = `O resultado é: <br> ${n1} : ${n2} = <strong>${res}</strong>`
    }
}

