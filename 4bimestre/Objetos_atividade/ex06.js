// Crie um array chamado biblioteca que contenha três objetos, cada um representando um livro. Cada livro deve ter as propriedades titulo, autor e anoPublicacao. Exiba todos os títulos no console.

const biblioteca = [
    { titulo: "Trono de Vidro", autor: "Sarah J.Maas", anoPublicacao: 2014},
    { titulo: "O Peso da Glória", autor: "C.S Lewis", anoPublicacao: 1941},
    { titulo: "Better than the movies", autor: "Lynn Painter", anoPublicacao: 2023}
]

const titulos = biblioteca.map(biblioteca => biblioteca.titulo)
console.log(titulos)
