// EXERCÍCIO 17 - SWITCH
// Considere:
//
// let opcao = 3;
//
// Utilize switch para mostrar:
// 1 = "Água"
// 2 = "Suco"
// 3 = "Refrigerante"
// 4 = "Café"
// Outro valor = "Opção inválida"

// Escreva sua solução abaixo:

let opcao = 3;

switch(opcao){
    case 1:
        console.log("Agua.");
        break;
    case 2:
        console.log("Suco.");
        break;
    case 3:
        console.log("Refrigerante.");
        break;
    case 4:
        console.log("Café.");
        break;
    default:
        break;
}