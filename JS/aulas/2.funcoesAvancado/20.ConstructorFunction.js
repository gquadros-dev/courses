// Função construtora -> objetos
// Função fabrica -> onjetos
// construtora -> new Pessoa

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('gab', 'quad');

console.log(p1.nome);