/*Proposta?
10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.*/

function eDivisivel (n) {
    if (n % 3 == 0){
        return true
    }else {
        return false
    }
}

console.log(eDivisivel(4))