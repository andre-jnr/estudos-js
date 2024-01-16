const fs = require('fs')

// const user = require('./user.json')
// console.log(user.nome)

// PARA LER UM ARQUIVO

//fs.readFile('./user.json', 'utf-8', (error, data) => {
//  if (error) {
//    console.log(error)
//    return
//  }
//
//  try {
//    const user = JSON.parse(data)
//    console.log(user.name)
//  } catch (e) {
//    console.log(e)
//  }
//})

//try {
//  const data = fs.readFileSync('./user.json', 'utf-8')
//  const user = JSON.parse(data)
//
//  console.log(user.name)
//} catch (e) {
//  console.log(e)
//}

const data = {
  id: 2,
  name: 'Andre Junior',
  email: 'fulano@gmail.com',
  phone: '(92)99999-9999'
}

//fs.writeFile(
//  './junior.json',
//  // JSON.stringify (data, ['id', 'name',' email]' pega apenas esses atributos
//  JSON.stringify(data, null, 2),
//  'utf-8',
//  (error, result) => {
//    if (error) {
//      console.log(error)
//      return
//    }
//
//    console.log(result)
//  }
//)

try {
  const dataString = JSON.stringify(data, null, 2)

  const result = fs.writeFileSync('./junior.json', dataString, 'utf-8')
  console.log(result)
} catch (e) {
  console.log(e)
}
