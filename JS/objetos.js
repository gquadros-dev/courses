const Pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 18,

    fala(){
        console.log(`A minha idadei é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

Pessoa1.fala();
Pessoa1.incrementaIdade();
Pessoa1.fala();


const Pessoa2 = {...a} // isso se chama "spread", quando faço isso ele copia os valores de um objeto pra outro


let array1 = [1, 2, 3, 4];
let array2 = [...a] // tb funga com array