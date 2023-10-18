// const { nome, sobrenome, falaNome } = require('./mod1');
// // const mod1 = require('./mod1');
// // const falaNome = require('./mod1').falaNome;

// // const falaNome = mod1.falaNome;
// console.log(falaNome());

const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Jao');
console.log(p1) 

// const p1 = new Pessoa('Luiz');
// console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));
