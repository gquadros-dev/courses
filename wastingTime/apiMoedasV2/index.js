class ConversaoMoedas {
    constructor(){
        this.textMoedas = document.querySelector('.texto-moedas');
        this.resultado = document.querySelector('.resultado');
        this.botoes = document.querySelectorAll('.button');
        this.primeiraMoeda = '';
        this.segundaMoeda = '';
    }

    bloqueiaBotoes(botaoClicado){
        if(botaoClicado.innerHTML === 'BRL') this.addClassBloqueio(['BRL', 'BTC']);
        if(botaoClicado.innerHTML === 'USD') this.addClassBloqueio(['USD', 'BTC']);  
        if(botaoClicado.innerHTML === 'GBP') this.addClassBloqueio(['GBP', 'CAD', 'BTC']);            
        if(botaoClicado.innerHTML === 'EUR') this.addClassBloqueio(['EUR', 'BTC']);
        if(botaoClicado.innerHTML === 'BTC') this.addClassBloqueio(['CAD', 'GBP', 'BTC']);            
        if(botaoClicado.innerHTML === 'CAD') this.addClassBloqueio(['BTC', 'CAD', 'GBP']);
    }    

    addClassBloqueio(array){
        this.limpaClassesBotoes();
        for(let botao of this.botoes){
            for(let i = 0; i < array.length; i++){
                if(botao.classList.contains(array[i])){
                    botao.classList.add('selecionado');
                };
            }
        }
    }    

    limpaClassesBotoes(){
        for(let botao of this.botoes){
            botao.classList.remove('selecionado');
        }
    }

    atribuiValorMoeda(botao){
        if(this.primeiraMoeda !== '' && this.segundaMoeda !== ''){
            this.primeiraMoeda = '';
            this.segundaMoeda = '';
            this.textMoedas.innerHTML = `Convertendo de ___ para ___`;
        }

        if(!this.primeiraMoeda) this.primeiraMoeda = botao.innerHTML;
        else if(this.primeiraMoeda !== '') {
            this.segundaMoeda = botao.innerHTML;
            this.limpaClassesBotoes();
        }
    }

    atribuiTexto(){
        if(this.primeiraMoeda && this.segundaMoeda){
            this.textMoedas.innerHTML = `Convertendo de ${this.primeiraMoeda} para ${this.segundaMoeda}`;
        } else if(this.primeiraMoeda){
            this.textMoedas.innerHTML = `Convertendo de ${this.primeiraMoeda} para ___`;
        }
    }

    getCurrency(moeda){
        if(moeda === 'BRL') return 'R$';
        if(moeda === 'USD') return 'US$';
        if(moeda === 'CAD') return 'C$';
        if(moeda === 'GBP') return '£';
        if(moeda === 'EUR') return '€';
        if(moeda === 'BTC') return 'BTC$';
    }
}

const conversaoMoedas = new ConversaoMoedas();

document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('selecionado')) return;

    if(el.classList.contains('button')){
        conversaoMoedas.bloqueiaBotoes(el);
        conversaoMoedas.atribuiValorMoeda(el);
        conversaoMoedas.atribuiTexto();

        if(conversaoMoedas.segundaMoeda !== ''){
            fetch(`https://economia.awesomeapi.com.br/last/${conversaoMoedas.primeiraMoeda}-${conversaoMoedas.segundaMoeda}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Não foi possível obter os dados');
                    }
                    return response.json();
                }).then(data => {
                        num = parseFloat(data[conversaoMoedas.primeiraMoeda+conversaoMoedas.segundaMoeda]['bid']);
                        conversaoMoedas.resultado.innerHTML = `${conversaoMoedas.getCurrency(conversaoMoedas.segundaMoeda)} ${num.toFixed(2)}`;
                }).catch(error => {
                    console.error('Erro:', error);
            });
        }
    }
});