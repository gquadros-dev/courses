exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Enviar aaa</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de Post.')
}