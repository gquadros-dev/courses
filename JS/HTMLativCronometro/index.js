const relogio = () => {
    const cronometro = document.querySelector('.cronometro');
    
    let segundos = 0;
    let timer;
    
    document.addEventListener('click', (e)=>{
        const el = e.target;
    
        if(el.classList.contains('iniciar')){
            cronometro.classList.remove('pausado');
            clearInterval(timer);
            startStopwatch();
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            cronometro.classList.add('pausado');        
        }
        if(el.classList.contains('zerar')){
            cronometro.classList.remove('pausado');
            cronometro.innerHTML = '00:00:00';
            clearInterval(timer);
            segundos = 0;        
        }
    });
    
    const getHourFromSeconds = segundos => {
        const data = new Date( segundos * 1000 );
        return data.toLocaleTimeString( 'pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const startStopwatch = () =>{
        timer = setInterval(()=> {
            segundos++;
            cronometro.innerHTML = getHourFromSeconds(segundos);
        }, 1000);
    }
}

relogio();