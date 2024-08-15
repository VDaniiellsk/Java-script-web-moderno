/*Proprosta:
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. */

function operaçãoMatematica (a, operação, b) {
    switch(operação) {
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '/':
            console.log(a / b)
            break
        case '*':
            console.log(a * b)
            break
        case '%':
            console.log(a % b)
            break
        default:
            console.log('Informe 2 operandos e uma operação')
    }
}

operaçãoMatematica(5, '+', 5)
operaçãoMatematica(5, '-', 5)
operaçãoMatematica(5, '/', 5)
operaçãoMatematica(5, '*', 5)
operaçãoMatematica(6, '%', 5)