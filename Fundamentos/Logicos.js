function compras(trabalho1, trabalho2){
    const comprasorvet = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    //const comprartv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprartv32 = trabalho1 != trabalho2 //operador unario
    const mantersaldavel= !comprasorvet
    return {comprasorvet, comprartv50, comprartv32, mantersaldavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))