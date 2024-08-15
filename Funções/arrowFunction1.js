let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorn esta emplicito

console.log(dobro(Math.PI))

ola = () => 'olá'
ola = _ => 'Olá' //possui um parametro, porem não precisa ser passsado
console.log(ola())