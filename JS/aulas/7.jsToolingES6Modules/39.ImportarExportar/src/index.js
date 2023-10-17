// import soma from './modulo1';
import alou, { nome, sobrenome, idade, soma, Pessoa } from './modulo1';



console.log(alou(5, 31));
console.log(nome, sobrenome, idade, soma(5, 5));

// console.log(Modulo1.nome, Modulo1.sobrenome, Modulo1.idade);
// console.log(Modulo1.soma(1,10));

const p1 = new Pessoa('Gabriel', 'Quadros');
console.log(p1.nome)