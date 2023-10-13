function tempoRandom(min, max){
    return 1000*(Math.floor(Math.random() * (max - min) + min));
}

// function espera(msg, tempo, cb){
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// espera('Frase1', tempoRandom(1, 4), () =>{  
//     espera('Frase2', tempoRandom(1, 4), () =>{ 
//         espera('Frase3', tempoRandom(1, 4));
//     });
// });

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera('Conexao com o BD', tempoRandom(1, 4))
    .then(resposta=>{
        console.log(resposta);
        return espera('Buscando dados da Base', tempoRandom(1, 4))
    })
        .then(resposta=>{
            console.log(resposta)
            return espera(22222, tempoRandom(1, 4));
        })
            .then(resposta=>{
                console.log(resposta);
                console.log('Exibe os dados da Base');
            })
    .catch(e =>{
        console.log('ERRO:', e);
    });
