class pessoa {
    constructor(name) {
        this.name = name
    }

    falar() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()