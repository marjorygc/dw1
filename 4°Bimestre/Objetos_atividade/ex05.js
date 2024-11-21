// - crie um objeto chamado `produto` com as propriedades `nome`, `preco` e `categoria`. Use um loop `for...in` para exibir todas as propriedades e seus valores no console.

const produto = {
    nome: "celular",
    preco: 1500.00,
    categoria: "eletrônicos",
}

for (let propriedade in produto) {
    console.log(propriedade, produto[propriedade]);
}