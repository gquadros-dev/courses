// return 

function soma(a, b){
    return a + b;
}

// se a função não tiver retorno ela retorna "undefined"

const criaPessoa = (nome, sobrenome) => {
    return {nome, sobrenome}
};

const p1 = criaPessoa('Gabriel', 'Quadros');
const p2 = criaPessoa('Luiz', 'Otávio');

console.log(p1, p2);