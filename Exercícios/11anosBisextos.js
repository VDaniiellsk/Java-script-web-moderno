/*Propostaa:
11)​As regras para o cálculo dos anos bissextos são as seguintes:De 4 em 4 anos é ano bissexto;De 100 em 100 anos não é ano bissexto;De 400 em 400 anos é ano bissexto;Prevalecem as últimas regras sobre as primeiras.Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console amensagem e retornando  true ou false.*/

function anoBissexto (ano) {
    if (ano % 4 == 0 ) {
        console.log(true)
    }else {
        console.log(false)
    }
}
anoBissexto(2015)