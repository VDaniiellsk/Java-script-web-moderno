/*Proposta:
19)​O cardápio de uma lanchonete é o seguinte:
Código   Descrição do Produto     Preço
 100       Cachorro Quente       R$ 3,00
 200      Hambúrguer Simples     R$ 4,00
 300        Cheeseburguer        R$ 5,50
 400            Bauru            R$ 7,50
 500         Refrigerante        R$ 3,50
 600             Suco            R$ 2,80
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use ocomando switch. Crie um caso default para produto não existente. */

function valorDoPedido (Qtd, Cod) {
    switch (Cod) {
        case 100:
            console.log(`Preço a pagar: R$${Qtd * 3.00}`)
            break
        case 200:
            console.log(`Preço a pagar: R$${Qtd * 4.00}`)
            break
        case 300:
            console.log(`Preço a pagar: R$${Qtd * 5.50}`)
            break
        case 400:
            console.log(`Preço a pagar: R$${Qtd * 7.50}`)
            break
        case 500:
            console.log(`Preço a pagar: R$${Qtd * 3.50}`)
            break
        case 600:
            console.log(`Preço a pagar: R$${Qtd * 2.80}`)
            break
        default:
            console.log('Produto não cadastrado, contate um funcionario ou informe um produto valido')
    }
}


valorDoPedido(3, 100)
valorDoPedido(3, 200)
valorDoPedido(3, 300)
valorDoPedido(3, 400)
valorDoPedido(3, 500)
valorDoPedido(3, 600)
valorDoPedido(3, 650)