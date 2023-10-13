function tempoRandom(min, max){
    return 1000*(Math.floor(Math.random() * (max - min) + min));
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            resolve(msg);
        }, tempo);
    });
}

// espera('Conexao com o BD', tempoRandom(1, 4))
//     .then(resposta=>{
//         console.log(resposta);
//         return espera('Buscando dados da Base', tempoRandom(1, 4))
//     })
//         .then(resposta=>{
//             console.log(resposta)
//             return espera(22222, tempoRandom(1, 4));
//         })
//             .then(resposta=>{
//                 console.log(resposta);
//                 console.log('Exibe os dados da Base');
//             })
//     .catch(e =>{
//         console.log('ERRO:', e);
//     });


// Promise.all - Promise.race - Promise.resolve - Promise.reject

// const promises = [
//     // 'Primeiro valor',
//     espera('Promise1', tempoRandom(1,5)),
//     espera('Promise2', tempoRandom(1,5)),
//     espera('Promise3', tempoRandom(1,5)),
//     espera(1000, tempoRandom(1,2)),
//     // 'Outro valor'
// ];

// Promise.all(promises)
// .then((valor) =>{
//     console.log(valor)
// })
// .catch((erro)=>{
//     console.log(erro);
// });

// Promise.race(promises)
// .then((valor) =>{
//     console.log(valor)
// })
// .catch((erro)=>{
//     console.log(erro);
// });


function baixaPagina(){
    const emCache = true;

    // if(emCache) return Promise.resolve('Página em cache');
    if(emCache) return Promise.reject('Página já está em cache');
    else return espera('baixei a pagina', tempoRandom(1, 5));
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO: ', e));