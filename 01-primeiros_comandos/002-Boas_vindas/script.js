let nome = prompt('Digite seu nome para podemos começar: ')

if (nome === null) {
  document.getElementById('paragrafo').innerText = `Seja bem vindo ninguém!`
} else {
  document.getElementById('paragrafo').innerText = `Seja bem vindo ${nome}`
}

console.log(`Seja bem vindo ${nome}`)
