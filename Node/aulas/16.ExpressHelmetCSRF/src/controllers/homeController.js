exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este sera <span style="color: red;">o titulo</span>',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}