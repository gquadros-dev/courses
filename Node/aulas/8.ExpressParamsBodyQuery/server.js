const express = require('express');
const app = express();

app.use(
        express.urlencoded({ extended: true })  // trata o body
    );

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Enviar aaa</button>
        </form>
    `);
});

// app.post('/', (req, res) =>{
//     res.send('Recebi o formulário!');
// });

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


app.get('/testes/:idUsuarios?/:param?/', (req, res) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2
    // 
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.get('/testes/:idUsuarios?/:param?/', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000.');
});

