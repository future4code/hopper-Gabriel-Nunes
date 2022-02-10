// Exercícios de Interpretação de Código

/* 1
a. false
b. false
c. true
d. boolean */

/*2
Os números serão impressos como strings pois falta definir a variável
como Number, portanto, não haverá a respota de uma soma no resultado. */

/* 3
Alteração:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) */

// Exercícios de Escrita de Código

/* 1.

const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
const difIdade = idadeUsuario - idadeMelhorAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo? -"
, idadeUsuario > idadeMelhorAmigo)

console.log ("A diferença de idade entre vocês é de:", difIdade, "anos") */

// 2.

/* const numeroPar = Number(prompt("Insira um número PAR:"))

console.log (numeroPar % 2)/*

 /* Todo número par dividido por outro número par, o resto
será sempre 0 */
/* Se o usuário colocar um número ímpar, o programa não considera os números após a
vírgula */

// 3.

/* const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMeses = idadeUsuario *12
const idadeDias = idadeMeses * 365
const idadeHoras = idadeDias * 24

console.log("Sua idade em meses é:", idadeMeses)
console.log("Sua idade em dias é:", idadeDias)
console.log("Sua idade em horas é:", idadeHoras) */

// 4.

/* const n1 = Number(prompt("Digite um número:"))
const n2 = Number(prompt("Digite outro número:"))
const div1 = n1 % n2
const div2 = n2 % n2

console.log ("O primeiro número é maior que o segundo?", n1 > n2)
console.log ("O primeiro número é igual ao segundo?", n1 === n2)
console.log ("O primeiro número é divisível pelo segundo?", div1 === 0)
console.log ("O segundo número é divisível pelo primeiro?", div2 === 0) */

//DESAFIO

// 1.

/* const gK = Number(77 - 32) * (5/9) + 273.15
const gC = Number(80) * (9/5) + 32
const gCF = Number(30) * (9/5) + 32
const gCK = Number(30 + 273.15)
const celsius = Number(prompt("Digite o valor em °C:"))
const kelvin = celsius + 273.15
const fahrenheit = celsius * (9/5) + 32

console.log("77° F em K é igual a:", gK,"K")
console.log("80°C em °F é igual a:", gC,"°C")
console.log("30°C em °F é igual a:", gCF, "°F", "e em K é igual a:", gCK,"K")

console.log ("O valor de", celsius, "°C em Kelvin é:", kelvin, "K")
console.log ("O valor de", celsius, "°C em Fahrenheit é:", fahrenheit, "°F") */

// 2.

/* const consumoKwh = Number(prompt("Digite o consumo em kWh da sua residência:"))
const valorConsumo = (consumoKwh * 0.05) * 30
const valorDesconto = valorConsumo * 0.15
const desconto = valorConsumo - valorDesconto

console.log("O valor a ser pago é: R$", valorConsumo)
console.log("O valor a ser pago com 15% de desconto é: R$", desconto) */

// 3.

/* const librasParaKg = 20 * 0.453592
const onçaParaKg = 10.5 * 0.0283495
const milhaParaMetro = 100 * 1.609
const pesParaMetro = 50 * 0.3048
const galaoParaLitro = 103.56 * 3.78541
const xicaraParaLitro = 450 * 0.284131

console.log("20lb equivalem a", librasParaKg,"kg")
console.log("10.5oz equivalem a", onçaParaKg,"kg")
console.log("100mi equivalem a", milhaParaMetro,"m")
console.log("50ft equivalem a", pesParaMetro,"m")
console.log("103.56gal equivalem a", galaoParaLitro,"l")
console.log("450xic equivalem a", xicaraParaLitro,"l")

const milhas = Number(prompt("Digite um valor em Metros(m):"))
const metros = milhas * 1.609

console.log("O valor", milhas, "milhas(lb) em metros é igual a:", metros, "m") */
