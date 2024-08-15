const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1 ,peso2)
console.log(Number.isInteger(peso1))

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const média = total / (peso1 + peso2)

console.log(média.toFixed(2))
console.log(média.toString())