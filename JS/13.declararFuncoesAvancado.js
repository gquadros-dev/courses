// Função literal
falaOi();
function falaOi() { // somente nesse tipo acontece o hoisting
    console.log('Oi!');
}


// Funções são "First-class objects" (Objetos de primeira classe)
// Function expression
const souUmDado = function() {  // você pode tratar a função como um dado, pois ela é um objeto
    console.log('sou um dado.');
};
souUmDado();


// Arrow Function
const arrowFunction = () => {
    console.log('sou uma arrow function');
}
arrowFunction();


// Dentro de um objeto
const obj = {
    // falar: function(){
    //     console.log('Estou falando...');
    // }
    falar(){
        console.log('estou falando...')
    }
};
obj.falar();
