var qtdeKm = Number(prompt('Digite a quantidade de Km percorridos'))
var qtdeDias = Number(
  prompt('Digire a quantidade de dias que o carro foi usado')
)

var valorAPagar = qtdeDias * 60 + qtdeKm * 0.15
document.write(`O total a pagar é <strong>R$${valorAPagar.toFixed(2)}</strong>`)
console.log(`O total a pagar é: ${valorAPagar}`)
