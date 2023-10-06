// Valor por referencia


// const nomes = new Array('Eduardo', 'Maria', 'Joana'); // -> construtor de array
// const nomes = ['eduardo', 'maria', 'joana', 'cleber', 'vitor'];
// const novo = [...nomes]; // -> spread operator

// console.log(nomes.length)

// nomes[2] = 'joao';
// delete nomes[2];
// nomes.pop(); // -> remove no último índice do array
// nomes.shift(); // -> remove no primeiro índice (desloca os índices)
// nomes.push('joao'); // -> adiciona no último índice do array
// nomes.unshift('joao'); // -> adiciona no primeiro índice (desloca os indíces)

// const novo = nomes.slice(1, -1);

// console.log(nomes);
// console.log(novo);


// const nome = 'Gabriel Fernando de Quadros';
// const nomes = nome.split(' ');
const nomes = ['Gabriel', 'Fernando', 'de Quadros'];
const nome = nomes.join(' ');
console.log(nomes);