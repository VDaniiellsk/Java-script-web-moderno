    //função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1, 3)
//imprimirSoma(2) valor de 'b' sera considerado "undefined" a soma sera feita mas ira jerar um "NaN" 
//imprimirsomA(2, 19, 55, 85) ira considerar somente os dois primeiros
//imprimirSoma() NaN

    //função com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2 + 5))
console.log(soma(2))