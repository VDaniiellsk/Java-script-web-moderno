/*Proposa:
21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniadoconsiderando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function caucularConvenio (idade) {
    if (idade >= 0 && idade <= 10) {
        console.log('180')
    } else if (idade >=11 && idade <=30 ) {
        console.log('150')
    } else if ( idade >=31 && idade <=60) {
        console.log('195')
    } else if (idade >= 61) {
        console.log('230')
    } else {
        console.log('informe um valor valido')
    }
}

caucularConvenio(6)
caucularConvenio(25)
caucularConvenio(35)
caucularConvenio(66)
caucularConvenio(-3)
caucularConvenio()