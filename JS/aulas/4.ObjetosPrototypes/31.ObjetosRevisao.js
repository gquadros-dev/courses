// string literal = ''  ``  ""
// objeto literal = { }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const chave = 'nome';
// console.log(pessoa.nome, pessoa.sobrenome);
// console.log(pessoa[chave], pessoa['sobrenome']);


// new object
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return `${this.nome} está falando seu nome.`;
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    // console.log(chave);
    // console.log(pessoa1[chave]);
}


// =======================================================================================

function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Gabriel', 'Quadros');
console.log(p1.nomeCompleto);

Object.freeze(p1);