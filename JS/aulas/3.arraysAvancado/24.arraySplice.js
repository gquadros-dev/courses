//               -5       -4       -3         -2         -1
//                0        1        2          3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Giulia'];

// nomes.splice(indiceDeAdicao, numeroDeElementosADeletar, elementoAdicionar, elementoAdicionar, ...)

//pop
const removidos = nomes.splice(-1, 1);

//shift
const sim = nomes.splice(0, 1);

//push 
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Sabrina');

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio', 'Sabrina');

