const fs = require('fs').promises;
// const camihoArquivo = path.resolve(__dirname, '..', 'teste.txt');

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, { flag: 'w' });
}

