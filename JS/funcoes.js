function soma (x = 0, y = 0) { // quando seta um valor definindo a função, ele torna isso um valor padrão, caso não enviar um deles quando chamar a funcao ele assume esse valor
    const resultado = x + y;
    return resultado;
}

const soma2 = function (x, y){
    const resultado = x + y;
    return resultado;
}

const soma3 = (x, y) => {
    const resultado = x + y;
    return resultado;
}
// três modos de declarar função

const raiz = n => n ** 0.5; // arrow function simplifica quando tem só uma linha do código e só um parâmetro