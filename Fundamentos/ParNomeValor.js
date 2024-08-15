// par nome/valor
const saudacao = 'opaa' //constexto léxico 1

function exec() {
    const saudacao = "faala" // contexto léxico 2
    return saudacao
}

//Objetos são grupas anunhados de pares nome/valo
const cliente = {
    nome: 'Daniel',
    idade: 18,
    peso: 58,
    endereço: {
        lagrdouro: 'travessa da jamaica',
        numero: 83 
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)