const resultado = document.querySelector('.resultado');

// fetch('pessoas.json')
//  .then(reposta => reposta.json())
//  .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(reposta => carregaElementosNaPagina(reposta.data));

function carregaElementosNaPagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        
        table.appendChild(tr);
    }
    resultado.appendChild(table);
}


