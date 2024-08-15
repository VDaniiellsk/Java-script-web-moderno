/*Proposta:
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deveinformar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function returnCédulas (valorDoSaque) {
    let notasDeSem = 0
    let notasDeCinquenta = 0
    let notasDeDez = 0
    let notasDeCinco = 0
    let notasDeUm = 0
    let valorNota = caulcularValores(valorDoSaque)
    while(valorDoSaque >= valorNota) {
        switch (valorNota){
            case 100:
                valorDoSaque -= 100
                notasDeSem++
                break
            case 50:
                valorDoSaque -= 50
                notasDeCinquenta++
                break
            case 10:
                valorDoSaque -= 10
                notasDeDez++
            case 5:
                valorDoSaque -= 5
                notasDeCinco
                break
            case 1:
                valorDoSaque -= 1
                notasDeUm++
                break
        }
        valorNota = caulcularValores(valorDoSaque)
    }
    console.log(resultado(notasDeSem, notasDeCinquenta, notasDeDez, notasDeCinco, notasDeUm))
}

function caulcularValores (valorDoSaque) {
    if(valorDoSaque >= 100) {
        return 100
    }else if (valorDoSaque >= 50) {
        return 50
    }else if (valorDoSaque >= 10) {
        return 10
    } else if (valorDoSaque >= 5) {
        return 5
    }else if (valorDoSaque >= 1) {
        return 1
    }
}

function resultado (notasDeSem, notasDeCinquenta, notasDeDez, notasDeCinco, notasDeUm) {
    let resultado = ''
    if (notasDeSem > 0) {
        resultado += `${notasDeSem} nota(s) de R$ 100, `
    }
    if (notasDeCinquenta > 0) {
        resultado += `${notasDeCinquenta} nota(s) de R$ 50, `
    }
    if (notasDeDez > 0) {
        resultado += `${notasDeDez} nota(s) de R$ 10, `
    }
    if (notasDeCinco > 0) {
        resultado += `${notasDeCinco} nota(s) de R$ 5, `
    }
    if (notasDeUm > 0) {
        resultado += `${notasDeUm} nota(s) de R$ 1, `
    }
    return resultado
}

returnCédulas(153
)