/*Proposta:
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).*/

function classificaçõesDeTriangulos (catetoOposto, catetoAdjacente, hipotenusa) {
    if (catetoAdjacente === catetoOposto && catetoOposto === hipotenusa) {
        console.log('Equilatero')
    }else if (catetoAdjacente === catetoOposto || catetoAdjacente === hipotenusa || catetoOposto === hipotenusa){
        console.log('Isósceles')
    }else if (catetoAdjacente !== catetoOposto && catetoOposto !== hipotenusa) {
        console.log('Escaleno')
    }else {
        console.log('Erro')
    }
}

classificaçõesDeTriangulos(5, 5, 5)
classificaçõesDeTriangulos(3, 5, 3)
classificaçõesDeTriangulos(8, 4, 3)
