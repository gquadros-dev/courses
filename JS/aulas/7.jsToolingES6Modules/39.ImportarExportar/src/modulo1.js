/*export*/ const nome = 'Luiz';
/*export*/ const sobrenome = 'Miranda';
/*export*/ const idade = 30;

/* export default */ function soma(x, y){
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }
}
 
export default (a, b) => a * b;
export { nome /*as default*/, sobrenome, idade, soma };