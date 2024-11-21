// Crie um objeto chamado pessoa com as propriedades nome e idade. Adicione um método cumprimentar que exiba uma mensagem no console com o nome da pessoa, como: "Olá, meu nome é [nome]".

const pessoa = {
    nome: "Maria",
    idade: 21,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    },
}

pessoa.cumprimentar()

