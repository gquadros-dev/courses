function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

const timer = setInterval(() => console.log(mostraHora()), 1000);

setTimeOut(() => clearInterval(timer), 10000);