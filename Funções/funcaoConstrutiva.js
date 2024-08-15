function carro (veloxidadeMaxima = 200, delta = 5) {
    let veloxidadeAtual = 0
    this.acelerar = function () {
        if (veloxidadeAtual + delta <= veloxidadeMaxima) {
            veloxidadeAtual += delta
        } else {
            veloxidadeAtual = veloxidadeAtual
        }
    }
    this.getVeloxidadeAtual = function () {
        return veloxidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVeloxidadeAtual())

const ferrari = new carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVeloxidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)
console.log(typeof uno)