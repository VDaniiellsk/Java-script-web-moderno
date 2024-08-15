/*Proposta:
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicia, taxaDeJuros, tempoDeAplicação) {
    let montante = capitalInicia * (Math.pow(1+taxaDeJuros, tempoDeAplicação))
    console.log(montante)
}
jurosSimples(2000, 0.10, 4)

function jurosComposto (capitalInicia, taxaDeJuros, tempoDeAplicação) {
    let montante = capitalInicia * (Math.pow(1+taxaDeJuros, tempoDeAplicação))
    console.log(montante)
}

jurosComposto(677, 0.05, 3)