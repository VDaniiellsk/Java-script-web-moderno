//Armazena uma função em uma variaval
const ImorimirSoma = function (a ,b) {
    console.log(a + b)
}

ImorimirSoma(2, 3)


//Armazenando a função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))


//Retorno inplicito

const subtração = (a ,b) => a - b
console.log(subtração(1, 2))