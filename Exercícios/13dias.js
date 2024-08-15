/*Proposta:
13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente aodia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function diaÚtil (dia) {
    switch (dia) {
    case 1:
    return "Fim de semana"
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: 
        return "Dia útil"
    case 7:
        return "Fim de semana"
    default: 
        return "Dia inválido"
    }
}

console.log(diaÚtil(1))
console.log(diaÚtil(2))
console.log(diaÚtil(3))
console.log(diaÚtil(4))
console.log(diaÚtil(5))
console.log(diaÚtil(6))
console.log(diaÚtil(7))
console.log(diaÚtil('a'))
