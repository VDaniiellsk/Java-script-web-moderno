function seforverdade(valor){
    if(valor) {
        console.log('é verdade...')
    }
    if (valor === false || undefined || null || NaN){
        console.log('Invalido')
    }
}
seforverdade()
seforverdade(null)
seforverdade(NaN)
seforverdade(undefined)
seforverdade('')
seforverdade(0)
seforverdade(-1)
seforverdade()