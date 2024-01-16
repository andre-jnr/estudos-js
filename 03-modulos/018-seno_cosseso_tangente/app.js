do {
  angulo = Number(prompt('Digite um angulo: '))
} while (isNaN(angulo))

var seno = Math.sin(angulo)
var cosseno = Math.cos(angulo)
var tangente = Math.tan(angulo)

document.write(`
  Seno: ${seno} <br>
  Consseno: ${cosseno} <br>
  Tangente: ${tangente} <br>
`)
