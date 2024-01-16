var alunos = []

for (let i = 1; i < 5; i++) {
  alunos.push(String(prompt(`Digite o nome do ${i}º aluno`)))
}

let aleatorio = Math.floor(Math.random() * alunos.length)

document.write(`O infeliz escolhido foi: ${alunos[aleatorio]}`)
