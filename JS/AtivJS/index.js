// Escreva uma função que recebe 2 números e retorna o maior deles

// const retornaMaior = (valorUm, valorDois) => valorUm > valorDois ? valorUm : valorDois;
// console.log(retornaMaior(10, 2));




// Escreva uma função chamada "ePaisagem" que recebe dois argumentos,largura 
// e altura de uma imagem. Retorne true se a imagem estiver no modo paisagem

// const ePaisagem = (largura, altura) =>  largura > altura;
// console.log(ePaisagem(1366, 768));





// Escreva uma função que recebe um número e retrone o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número 
// Use a função com números de 0 a 100


const FizzBuzz = function(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 5 === 0 && numero % 3 === 0) return 'FizzBuzz';
    if (numero % 5 === 0 ) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;
}

for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz('a'));
}