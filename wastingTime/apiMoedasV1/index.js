function conersaoMoeda(){
    const textoMoedas = document.querySelector('.texto-moedas');
    const resultado = document.querySelector('.resultado');
    const button = document.querySelectorAll('.button');

    const limparCampos = () => {
            for(let botao of button) {
                botao.classList.remove('selecionado');
            }  
            return ['', '', 0];
        }

    let [moeda1, moeda2, moedasSelecionadas] = limparCampos();
    
    document.addEventListener('click', (e)=>{
        let el = e.target;
        if (el.classList.contains('button')){
            if(el.classList.contains('selecionado')) return;

            if(moedasSelecionadas < 1) {
                moeda1 = el.innerText;
                selecionaBotao(el, moedasSelecionadas);
                textoMoedas.innerText  = `Convertendo de ${moeda1} para ___`;
                moedasSelecionadas += 1;
                return;
            }

            if(moedasSelecionadas = 1) {
                moeda2 = el.innerText;    
                selecionaBotao(el, moedasSelecionadas);
                textoMoedas.innerText  = `Convertendo de ${moeda1} para ${moeda2}`;
                converteMoeda(moeda1, moeda2, getCurrency(moeda2));
            }

            [moeda1, moeda2, moedasSelecionadas] = limparCampos();
        }
    });


    function selecionaBotao(el, moedasSelecionadas){
        el.classList.toggle('selecionado');
        if(el.innerText === 'BRL') bloqueia(['BRL', 'BTC']);
        if(el.innerText === 'USD') bloqueia(['USD', 'BTC']);
        if(el.innerText === 'CAD') bloqueia(['CAD', 'GBP', 'BTC']);
        if(el.innerText === 'GBP') bloqueia(['GBP', 'CAD', 'BTC']);
        if(el.innerText === 'EUR') bloqueia(['EUR', 'BTC']);
        if(el.innerHTML === 'BTC') bloqueia(['BTC', 'CAD', 'GBP']);
    }

    function bloqueia(array){
        for(let valor of array){
            console.log(valor);
            const botao = document.querySelector(`#${valor}`);
            botao.classList.add('selecionado');
        }
    }     
    
    function getCurrency(moeda){
        if(moeda === 'BRL') return 'R$';
        if(moeda === 'USD') return 'US$';
        if(moeda === 'CAD') return 'C$';
        if(moeda === 'GBP') return '£';
        if(moeda === 'EUR') return '€';
        if(moeda === 'BTC') return 'BTC$';
    }

    
    const converteMoeda = (moeda1, moeda2, currency) => {
        fetch(`https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados');
            }
            return response.json();
        }).then(data => {
                cleber = parseFloat(data[moeda1+moeda2]['bid']);
                resultado.innerHTML = `${currency} ${cleber.toFixed(2)}`;
        }).catch(error => {
            console.error('Erro:', error);
        });
    }
}

conersaoMoeda();