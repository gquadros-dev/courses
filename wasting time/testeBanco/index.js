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
    console.log('Conectado ao banco de dados PostgreSQL!');
    
    // Aqui você pode realizar consultas e operações no banco de dados

    // Por exemplo, você pode executar uma consulta SQL
    client.query(`SELECT * FROM TESTE`, (err, results) => {
        //INSERT INTO TESTE(nome) VALUES('Gabriel')
        //CREATE TABLE TESTE(id SERIAL PRIMARY KEY, nome VARCHAR(20) NOT NULL)
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
