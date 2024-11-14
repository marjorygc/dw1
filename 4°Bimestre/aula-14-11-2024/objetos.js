const pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome} ${this.idade} anos`);
    }
};

pessoa.cumprimentar();

const aluno = {
    nome: "Pedro",
    idade: 20,
    curso: "Engenharia"
};

// Usando for...in
for (let chave in aluno) {
    console.log(aluno[chave]);
}



