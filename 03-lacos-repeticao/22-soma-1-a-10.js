// EXERCÍCIO 22 - SOMA
// Utilize um for para somar todos os números de 1 até 10.
// Ao final, mostre o resultado.

// Escreva sua solução abaixo:
let soma = 0;
for(let i = 10; i >= 1; i-=2){
    let j = i-1;
    soma += i+j;
    console.log(soma);
}
