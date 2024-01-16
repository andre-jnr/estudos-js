var algo = prompt('Digite algo: ')
alert(`TIPO: ${typeof algo}`)

var numero = parseFloat(algo)

if (!isNaN(numero)) {
  console.log('A variável pode ser convertida para um número.')
} else {
  console.log('A variável não pode ser convertida para um número.')
}

if (!Number.isInteger(numero)) {
  console.log('A variável tem casas decimais.')
} else {
  console.log('A variável não tem casas decimais.')
}
