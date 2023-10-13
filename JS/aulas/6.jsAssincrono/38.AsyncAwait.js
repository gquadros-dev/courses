function tempoRandom(min=0, max=3){
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


// espera('Fase 1', tempoRandom())
// .then(valor => {
//    console.log(valor);
//    return espera('Fase 2', tempoRandom());
// })
// .then(fase=>{
//     console.log(fase);
//     return espera('Fase 3', tempoRandom());
// })
// .then(fase=>{
//     console.log(fase);
// })
// .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await espera('Fase 1', tempoRandom());
        console.log(fase1)
        const fase2 = await espera('Fase 2', tempoRandom());
        console.log(fase2)
        const fase3 = await espera('Fase 3', tempoRandom());
        console.log(fase3)
        console.log('Terminamos na fase:', fase3);
    } catch(e){
        console.log(e);
    }
}
executa();


// Estados da promise:
//
// pendente -> pending
// resolida -> fullfilled
// rejeitada -> rejected