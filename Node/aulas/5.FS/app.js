const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: "Gabriel" },
//     { nome: "Pedro" },
//     { nome: "Maria" },
//     { nome: "José" },
// ];

// const json = JSON.stringify(pessoas);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor.nome));
}

leArquivo(caminhoArquivo);

// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));