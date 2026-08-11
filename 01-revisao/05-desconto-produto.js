// EXERCÍCIO 05 - DESCONTO
// Considere:
//
// let preco = 200;
// let desconto = 20;
//
// Calcule o valor do desconto e o preço final.
// O desconto está em porcentagem.

// Escreva sua solução abaixo:

let precoA = 200;
let desconto = 20;
let precoB = precoA * desconto / 100;
let precoC = precoA - precoB;

console.log(`Se o produto vale ${precoA}RS, e o desconto é de ${desconto}, o valor final é de: ${precoC}`);