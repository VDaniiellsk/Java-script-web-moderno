/*Proposta:
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.*/

function operaçõesMatematicas1(a , b) {
    console.log(a + b, a - b, a * b, a / b)
}
operaçõesMatematicas1(4, 6)

//---------------------------------------------//

function operaçõesMatematicas2 (a, b) {
    const produtos = {
        soma: a + b,
        subtração: a - b,
        multiplicação: a * b,
        divisão: a / b
    }
    return produtos 
}

console.log(operaçõesMatematicas2(7, 8))

//---------------------------------------------//

const operaçõesMatematicas3 = (a , b) => {console.log(`soma: ${a + b}, Subtração: ${a - b}, Multiplicação: ${a * b}, Divisão: ${a / b}`)}
operaçõesMatematicas3(5, 2)