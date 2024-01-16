do {
  var numero = Number(prompt('Digite um número inteiro'))

  numero = parseInt(numero)

  if (Number.isInteger(numero)) {
    var validacao = false
  } else {
    var validacao = true
  }
} while (validacao)

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} X ${i} = ${numero * i}`)
}
