/*Proposta:
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

const exponenciação1 = (base, expoente) => Math.pow(base,expoente)
console.log(exponenciação1(2, 6))

//______________________________________________________________

function exponenciação2 (base, expoente) {
    console.log(Math.pow(base,expoente))
}

exponenciação2(3, 2)

//_______________________________________________________________

const exponenciação3 = (base, expoente) => base ** expoente
console.log(exponenciação3(3, 5))

//_______________________________________________________________

const exponenciação4 = (base, expoente) => console.log(base ** expoente)
exponenciação4(2, 4)
