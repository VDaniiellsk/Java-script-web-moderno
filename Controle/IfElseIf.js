Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const resultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra:',nota)
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado:', nota)
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação:', nota)
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado:', nota)
    } else {
        console.log('Nota Invalida!')
    }
}

resultado(10)
resultado(7.5)
resultado(5)
resultado(2.99)
resultado(-1)