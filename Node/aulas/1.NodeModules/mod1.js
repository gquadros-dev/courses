// const nome = 'Gabriel';
// const sobrenome = 'Quadros';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// console.log(module.exports);

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {
    nome, sobrenome, Pessoa
};
// exports.Pessoa = Pessoa;