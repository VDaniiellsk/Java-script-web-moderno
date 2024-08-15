//Closuer é o escopo criaado quando a function é declarada.
//Esse escopo permite a function acessar e manipular variaveis externas á function

//contexto lexico em ação:

const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunction = fora()
console.log(minhaFunction())