// EXERCÍCIO 12 - FAIXA ETÁRIA
// Considere:
//
// let idade = 13;
//
// Classifique:
// até 11 anos = "Criança"
// de 12 até 17 = "Adolescente"
// 18 ou mais = "Adulto"

// Escreva sua solução abaixo:

let idade = 13;

if(idade <= 11){
    console.log("Criança")
}
else if(idade >= 12 && idade <= 17){
    console.log("Adolescente");
}
else{
    console.log("Adulto");
}