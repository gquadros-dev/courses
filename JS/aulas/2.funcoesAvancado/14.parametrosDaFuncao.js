function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
// funcao({nome: 'luiz', sobrenome:'otávio', idade:20}); // atribuição via desestruturação / também funciona com array



function soma(a, b = 2, c = 4){
    // b = b || 0; => modo antigo de resolver
    console.log(a + b + c);
}
// soma(1, null, 10); // seta o valor como 0
// soma(1, '', 10); // concatena os números, como strings
// soma(1, undefined, 10); // assume o valor padrao



function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '+') acumulador -= numero;
        if (operador === '+') acumulador /= numero;
        if (operador === '+') acumulador *= numero;
    }
    console.log(acumulador);
}
// conta('+', 0, 20, 30, 40, 50);



// const arrowTeste = (operador, acumulador, ...numeros) => { 
const arrowTeste = (...args) => {
    console.log(args);  // não existe o arguments em arrow Function, por isso usa o "rest operator" dessa forma
}
arrowTeste('+', 0, 20, 30, 40, 50);