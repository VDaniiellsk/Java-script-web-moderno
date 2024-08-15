/*Proposta:
08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantémregistro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se omesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar umvetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.)*/

let entradaDePontuações = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function desempenho (entradaDePontuações) {
    let pontuações = entradaDePontuações.split(", ")
    let recordesQuebrados = 0
    let pioresJogos = 1
    let maiorPontuação = [0]
    let menorPontuação = [0]

    for( let i = 1; i < pontuações.length; i++) {
        if(pontuações[i] > maiorPontuação){
            recordesQuebrados++
        }else if (pontuações[i] < menorPontuação) {
            menorPontuação = pontuações[i]
            pioresJogos = i + 1;
        }
    }
    return [recordesQuebrados, pioresJogos]
}

console.log(desempenho(entradaDePontuações))
    
