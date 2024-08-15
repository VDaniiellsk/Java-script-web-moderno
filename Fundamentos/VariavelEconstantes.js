var A = 30
let B = 4      //usar "let" como padrão(preferencialmente)//

var A = 30     //usa duas variaveis "var" com o mesmo identificador não invalida o códgo, sera utizada a ultima varialvel "var" dleclarada//
B = 40        // variaveis "let" so podem ter um por identificador, ao contrario de "var"//

console.log(A, B)

A = 300        //var pode receber alteraçãoes nos valores// 
B = 400

console.log(A ,B)

const C = 5
//C = 50         //constantes não pode ter os valores alterados//

console.log(C)
