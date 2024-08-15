// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 3,
    endereço: {
        lagradouro: 'rua abc',
        numero: 87
    }
}
const { nome, idade } = pessoa
console.log(nome,idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereço: {lagradouro, numero, cep }} = pessoa
console.log(lagradouro, numero, cep)

//console.log { conta: { digito, agencia }} = pessoa
//console.log(digito, agencia)
