function soboanoticia(nota){
    if (nota >= 7){
        console.log('Ap')
    }
    if (nota < 7 ){
        console.log('Rp')
    }   
}

soboanoticia(6)
soboanoticia(7)

function seforverdade(valor){
    if(valor) {
        console.log('é verdade...')
    }
    else {console.log('inválido')
    }
}
seforverdade()
seforverdade(null)
seforverdade(NaN)
seforverdade(undefined)
seforverdade('')
seforverdade(0)
seforverdade(-1)
seforverdade(' ')
seforverdade('?')
seforverdade([ ])
seforverdade([1,4])
seforverdade({})