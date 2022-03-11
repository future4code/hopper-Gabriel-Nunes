// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 
// 1 - O console irá imprimir item por item do array "usuario", depois irá imprimir seu índice e logo após ele irá mostrar o array completo.

// 2 - Amanda Rangel, Laís Petra, Letícia Chijo

// 3 - Irá imprimir os 2 elementos do array que não contém "Chijo" neles.


// #####################


// EXERCICIO DE ESCRITA DE CÓDIGO

// 1

// a)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArrayA = pets.map((pet, index, array) => {
//     return pet.nome 
//  })

//  console.log(novoArrayA)

// b)

//  const arraySalsicha = pets.filter((pet, index, array) => {
//     return pet.raca === "Salsicha"
//  })

// console.log(arraySalsicha)

// c)

// const arrayPoodle = pets.filter((pet, index, array) => {
//    if(pet.raca === "Poodle"){
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)

//    }
// })

// 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// a)

// const arrayNome = produtos.map((produto, indice, array) => {
//     return produto.nome

// })

// console.log(arrayNome)

// b)

// const arrayDesconto = produtos.map((produto, indice, array) => {
//     produto.preco = produto.preco * (95/100)
//     return produto

// })   

// console.log(arrayDesconto)

// c) 

// const arrayBebidas = produtos.filter((produto, indice, array) => {
//     return produto.categoria === "Bebidas"

// })

// console.log(arrayBebidas)

// d) 

// const arrayYpe = produtos.filter((produto,indice,array) => {
//     return produto.nome.includes("Ypê")

// })

// console.log(arrayYpe)

// e)

// const arrayYpe = [produtos.map((produto,indice,array) => {
//     if(produto.nome.includes("Ypê")) {
    
//     console.log(`Compre ${produto.nome} por R$${produto.preco}.`)
//     }
// })
// ]
