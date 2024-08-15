/*Proposta:
14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crietambém um default, que retornará uma mensagem de erro no console. */

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não temos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Por favor, insira oque voçê dezeja!')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('manga')