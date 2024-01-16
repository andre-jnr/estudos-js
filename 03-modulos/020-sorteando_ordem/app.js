function shuffle(lista) {
  lista.sort(() => Math.random() - 0.5)
}

let alunos = []

for (let i = 1; i < 5; i++) {
  alunos.push(prompt(`Digite o nome do ${i}º aluno`))
}

shuffle(alunos)

document.write(`Ordem da apresentação: ${alunos}`)
