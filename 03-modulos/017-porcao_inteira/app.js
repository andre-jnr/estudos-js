do {
  numero = Number(prompt('Digite um número'))
} while (isNaN(numero))

document.write(`Porção inteira: ${parseInt(numero)}`)
