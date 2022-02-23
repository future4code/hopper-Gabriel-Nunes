// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Digite a altura: "))
const largura = Number(prompt("Digite a largura: "))

console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual: "))
const anoNascimento = Number(prompt("Digite seu ano de nascimento: "))

console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso / (altura*altura)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Digite seu nome:")
const idade = prompt("Digite sua idade:")
const email = prompt("Digite seu email:")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite sua primeira cor favorita: ")
const cor2 = prompt("Digite sua segunda cor favorita: ")
const cor3 = prompt("Digite sua terceira cor favorita: ")
const coresFavoritas = [cor1, cor2, cor3]

console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo/valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1>=string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]

}
imprimeMensagem
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
  let first = array.shift()
  let second = array.pop()
  let third = array.unshift(second)
  let last = array.push(first)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let checagem = string1.toLowerCase() === string2.toLowerCase()
return checagem

// return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
  const anoIdentidade = Number(prompt("Digite o ano de emissão do seu RG:"))
  
  const menorDe20 = (anoAtual - anoNascimento) <= 20
  const entre20E50 = (anoAtual - anoNascimento) <= 50
  const acimaDe50 = (anoAtual - anoNascimento) > 50
  
  const identidade20 = (anoAtual - anoIdentidade) >= 5
  const identidade20E50 = (anoAtual - anoIdentidade) >= 10
  const identidadeMaiorDe50 = (anoAtual - anoIdentidade) >= 15
  
  console.log(identidade20 && menorDe20 || identidade20E50 && entre20E50 || identidadeMaiorDe50
    && acimaDe50)
    
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let maiorDe18 = prompt("Você tem mais de 18 anos?") === "sim"
let ensinoMedio = prompt ("Você possui ensino médio completo?") === "sim"
let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"
  
console.log(maiorDe18 && ensinoMedio && disponibilidade)

}