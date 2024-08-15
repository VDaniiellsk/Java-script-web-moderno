/*Proposta
24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function multImpresao (nDeVezes) {
    let repetição = 0
    let vez = 1
    while (nDeVezes > repetição) {
        console.log(`${vez}) Hello, world!`)
        repetição ++
        vez ++
    }
}

multImpresao(11)

function helloWorld () {
    let i = 0
     while (i < 11) {
         console.log("Hello World");
         i++
     }   
 }
 
helloWorld()