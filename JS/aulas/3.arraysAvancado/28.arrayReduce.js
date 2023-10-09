// Some todos os números (reduce)
// Retorne um array com pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numeros.reduce((acumulador, valor)=> acumulador += valor);
// console.log(total);




// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Gabriel', idade: 15},
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => acumulador.idade > valor.idade ? acumulador : valor);
console.log(pessoaMaisVelha);