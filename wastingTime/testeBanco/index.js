let login = 'GABRIEL.QUADROS';
let senha = '101214';
// let senha;

// const campoLogin = document.getElementById('login');
// const campoSenha = document.getElementById('senha');

// document.addEventListener('click', (e)=>{
//   el = e.target;

//   if(el.classList.contains('submit-button')){
//     login = campoLogin.value;
//     senha = campoSenha.value;
//     console.log(login, senha);
//   }
// });



// Importe o módulo 'pg'
const { Client } = require('pg');

// Configure a conexão com o banco de dados
const client = new Client({
  user: 'postgres',      
  host: 'localhost',     
  database: 'testesNode',
  password: '101214',   
  port: 5432                 
});

// Conecte-se ao banco de dados
client.connect()
  .then(() => {    
    // Aqui você pode realizar consultas e operações no banco de dados

    // Por exemplo, você pode executar uma consulta SQL
    client.query(`SELECT ID FROM USUARIOS WHERE usuario = '${login}' AND senha = '${senha}'`, (err, results) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
      } else {
        console.log('Resultados da consulta:', results.rows);
      }

      // Feche a conexão com o banco de dados quando terminar
      client.end();
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
