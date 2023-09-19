const botao = document.getElementById('btn-enviar');
const textBox = document.getElementById('text-box');

const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');

class Pessoa {
    constructor(nome, sobrenome, altura, peso){
        this.nome      = nome,
        this.sobrenome = sobrenome, 
        this.altura    = altura,
        this.peso      = peso
    }
}

let arrayPessoas = new Array;

botao.addEventListener('click', () =>{
    let pessoa = new Pessoa(nome.value, sobrenome.value, altura.value, peso.value);
    arrayPessoas.push(pessoa);
    textBox.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura} <br/><br/>`;
});