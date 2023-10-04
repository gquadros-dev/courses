const container = document.querySelector('.container');

const elementos = [
    {tag: 'p',       texto: 'Frase 1'},
    {tag: 'div',     texto: 'Frase 2'},
    {tag: 'nav',     texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer',  texto: 'Frase 4'}
];

const colocaElementosNaTela = function(){
    for(let i = 0; i < elementos.length; i++){
        const { tag, texto } = elementos[i];

        elementoCriado = document.createElement(tag);
        elementoCriado.innerHTML += texto;
        container.appendChild(elementoCriado);
    }
}

colocaElementosNaTela();