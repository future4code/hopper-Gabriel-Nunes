// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
// 1
// A) Matheus Nachtergaele
// Virginia Cavendish
// {canal: 'Globo', horario: '14h'}

// 2
// A) idade: 3
//    nome: Juca
//    raca: SRD

//    idade:3
//    nome:Juba
//    raca:SRD

//    idade: 3
//    nome:Jubo
//    raca: SRD

// B) Cria uma cópia do objeto selecionado.

// 3
// A)false, undefined
// B)a propriedade "altura" não foi definida. 

// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1
// A)

// const pessoa = {
//     nome: "Gabriel",
//     apelidos: ["Biel", "Gabs", "Gabi"]

// }

//  function imprimeMensagem (objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`)
//     return objeto

//  }

// imprimeMensagem(pessoa)

// // B)
// const novoApelido = {
//     ...pessoa,
//     apelidos: ["Nunes", "CR7", "Kakashi"]

// }

// imprimeMensagem(novoApelido)

//2
// A)
// const pessoa1 = {
//     nome:"Gabriel",
//     idade: 22,
//     profissao: "Designer"
    
// }

// const pessoa2 = {
//     nome:"Cristiano Ronaldo",
//     idade: 37,
//     profissao: "Jogador"
    
// }

// B)

// function recebeObjeto(objeto) {
//     console.log([`${objeto.nome}, ${objeto.nome.length}, ${objeto.idade}, ${objeto.profissao}, ${objeto.profissao.length}`])
//     return objeto

// }

// recebeObjeto(pessoa1)
// recebeObjeto(pessoa2)

// 3

let carrinho = []

const fruta1 = {
    nome: "Goiaba",
    disponibilidade: true

}

const fruta2 = {
    nome: "Maracujá",
    disponibilidade: true

}

const fruta3 = {
    nome: "Banana",
    disponibilidade: true

}

function recebeFrutas(objeto1,objeto2,objeto3) {
    let carrinho = [objeto1, objeto2, objeto3]
    console.log(carrinho)
    return recebeFrutas
}

recebeFrutas(fruta1,fruta2,fruta3)
