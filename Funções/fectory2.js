function criarProuto (produto, preço) {
    return {
        produto,
        preço,
        deconto: 0.2
    }
}

const escova = new criarProuto('escova', 9)
console.log(escova)