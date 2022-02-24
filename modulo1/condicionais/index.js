// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1
// A) O código verifica se o resto do número inserido pelo usuário, dividido por 2 é igual a 0.
// B) Para os números pares.
// C) Para os números impares.

// 2
// A) Para verificar o preço das frutas.
// B) O preço da fruta Maçã é R$ 2.25
// C) O preço da fruta  Pêra  é  R$  5

// 3
// A) Está solicitando uma informação usuário.
// B) Para o número 10 a mensagem será: "Esse número passou no teste"; Para o número -10, não irá mostrar nenhuma mensagem.
// C) O console não irá imprimir a mensagem pois a variável está dentro de um escopo local.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir.")
    
// } else {
//     console.log("Você não pode dirigir.")

// }

//2

// const turnoAluno = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")

// if (turnoAluno === "M") {
//     console.log("Bom Dia!")

// } else if (turnoAluno === "V") {
//     console.log("Boa Tarde!")

// } else {
// console.log("Boa Noite!")

// }

// 3

// let turnoAluno = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno)")
// let mensagem

// switch(turnoAluno) {
//     case "M":
//         mensagem = "Bom Dia!"
//         break
//     case "V":
//         mensagem = "Boa Tarde!"
//         break
//     default:
//         mensagem = "Boa Noite!"
//         break
// }

// console.log(mensagem)

// 4

// let generoFilme = prompt("Qual o gênero do filme que vão assistir?") === "fantasia"
// let precoDoIngresso = Number(prompt("Qual o preço do ingresso?")) === 15

// if (generoFilme && precoDoIngresso) {
//     console.log("Bom filme!")

// } else {
//     console.log("Escolha outro filme :(")

// }

// DESAFIOS

// 1
// let generoFilme = prompt("Qual o gênero do filme que vão assistir?") === "fantasia"
// let precoDoIngresso = Number(prompt("Qual o preço do ingresso?")) === 15
// let condicao = generoFilme && precoDoIngresso

// if (condicao) {
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${snack}`)
// } else {
//     console.log("Escolha outro filme :(")

// }
