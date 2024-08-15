/*Proposta:
22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. Aanuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function anuidade (mês, valorDaAnuidade) {
    let juros = 0.05
    if(mês == 1) {
        console.log(`Você ira pagar somente ${valorDaAnuidade}`)
    } else {
        console.log(`Você deve pagar ${valorDaAnuidade * (Math.pow(1+juros, mês))} (${mês * juros})`)
    }
}

anuidade(3, 677)
anuidade(1, 677)