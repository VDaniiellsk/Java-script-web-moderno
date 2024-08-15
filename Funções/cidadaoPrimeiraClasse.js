// Função em JS é frist-class Objeto (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar em variavle
const fun2 = function () {
    return('ola')
 }

// Armazenar em array
const array = [function (a,b) {return a+b},fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = { }
obj.falar = function() {return 'opa'}
console.log(obj.falar)

///passar funções como parametro
function run(fun) {
    fun ()
}

run(function () { console.log('executando...') })

//Uma função pode retornar/conter uma função
function soma (a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma (2,9)(1)
const cincoMais = soma (2,9)
cincoMais(1)