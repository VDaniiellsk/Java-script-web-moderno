/*Proposta:
17)​ Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo:
Plano | Aumento
  A   |  10%
  B   |   15%
  C   |   20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento (plano,salarioAtual) {
    switch(plano) {
        case 'A':
            console.log(10 / 100 * salarioAtual + salarioAtual)
            break
        case 'B':
            console.log(15 / 100 * salarioAtual + salarioAtual)
            break
        case 'C':
            console.log(20 / 100 * salarioAtual + salarioAtual)
            break
        default:
            console.log('Plano invalido')
    }
}

aumento('A',100)
aumento('B',100)
aumento('C',100)