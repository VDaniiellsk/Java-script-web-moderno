/*Proposta:
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

/*function resultado (códigoDoAluno, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]
    let código = códigoDoAluno
    while (código >= 1 ) {
        if(nota1 >= nota2 && nota3) {
            let pond = ((4*nota1) + (3*nota2) + (3*nota3)) / (4 + 3 + 3)
            if (pond >= 5) {
                console.log(`Sua media é: ${pond} (Aprovado!) Notas: ${notas} `)
            } else {
                console.log(`Sua media é: ${pond} (Reprovado!) Notas: ${notas} `)
            }
        } else if (nota2 >= nota1 && nota2) {
            let pond = ((3*nota1) + (4*nota2) + (3*nota3)) / (nota1 + nota2 + nota3)
            if (pond >= 5) {
                console.log(`Sua media é: ${pond} (Aprovado!) Notas: ${notas} `)
            } else {
                console.log(`Sua media é: ${pond} (Reprovado!) Notas: ${notas} `)
            }
        } else if (nota3 >= nota1 && nota2) {
            let pond = ((3*nota1) + (3*nota2) + (4*nota3)) / (nota1 + nota2 + nota3)
            if (pond >= 5) {
                console.log(`Sua media é: ${pond} (Aprovado!) Notas: ${notas} `)
            } else {
                console.log(`Sua media é: ${pond} (Reprovado!) Notas: ${notas} `)

            }
        }
    }
}

resultado(1, 6, 4, 5)
resultado(1, 6, 4, 4) 
(jeito burro ksks)
*/ 

function resultado (códigoDoAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a > b ? 1 : -1)

    let mediaF = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${códigoDoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaF< 5 ? 'Reprovado.' : 'Aprovado.'}`)
}
resultado(123, 2.8, 6, 3.5)