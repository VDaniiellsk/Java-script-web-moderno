//function declareition (pode ser invocada antes da declaaração)
console.log(soma(3, 4))
function soma(x, y) {
    return x + y
}

//function expression(so pode ser chamada após a declaração)
const sub = function (x , y) {
    return x - y
}
console.log(sub(3, 4))

// named function expressio (so pode ser chamada após a declaração)
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(4, 3))