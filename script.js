var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var resultado = document.getElementById("resultado");

function alerta() {
    window.alert("Erro! Um dos campos está vazio, por favor digite um número.");
}

function calcular(opcao) {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    if (num1.value.length == 0 || num2.value.length == 0) {
        alerta();
    } else {
        switch (opcao) {
            case 1: //somar
                var res = n1 + n2;
                resultado.innerHTML = `O resultado é: <br> ${n1} + ${n2} = <strong>${res}</strong>`;
                break;
            case 2: //subtrair
                var res = n1 - n2;
                resultado.innerHTML = `O resultado é: <br> ${n1} - ${n2} = <strong>${res}</strong>`;
                break;
            case 3: //multiplicar
                var res = n1 * n2;
                resultado.innerHTML = `O resultado é: <br> ${n1} x ${n2} = <strong>${res}</strong>`;
                break;
            case 4: //dividir
                var res = n1 / n2;
                resultado.innerHTML = `O resultado é: <br> ${n1} : ${n2} = <strong>${res}</strong>`;
                break;
            default:
                break;
        }
    }
}
