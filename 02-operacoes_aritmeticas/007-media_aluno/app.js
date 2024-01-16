do {
  var n1 = Number(prompt(`Digite a 1ª nota: `))
} while (0 > n1 || n1 > 10)

do {
  var n2 = Number(prompt(`Digite a 2ª nota: `))
} while (0 > n2 || n2 > 10)

let media = (n1 + n2) / 2
console.log(media.toFixed(2))
