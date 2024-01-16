do {
  var catetoOposto = Number(prompt('Digite o comprimento do cateto oposto'))
} while (isNaN(catetoOposto))

do {
  var catetoAdjacente = Number(
    prompt('Digite o comprimento do cateto adjacente')
  )
} while (isNaN(catetoAdjacente))

let hipotenusa = Math.hypot(catetoOposto, catetoAdjacente)
document.write('Hipotenusa: ', hipotenusa.toFixed(2))
