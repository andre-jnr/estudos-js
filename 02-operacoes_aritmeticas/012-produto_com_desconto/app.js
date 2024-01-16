var valorVendaProduto = Number(prompt('Digite o valor de venda do produto'))
var valorComDesconto = valorVendaProduto - valorVendaProduto * 0.05

console.log(`O valor com desconto ficar R$${valorComDesconto.toFixed(2)}`)
