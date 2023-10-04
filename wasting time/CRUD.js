fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });



const data = {
    title: 'Exemplo de Post',
    body: 'Conteúdo do post'
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response => {
    if (!response.ok) {
    throw new Error('Não foi possível criar o post');
    }
    return response.json();}
).then(data => {
    console.log('Post criado:', data);
}).catch(error => {
        console.error('Erro:', error);
});