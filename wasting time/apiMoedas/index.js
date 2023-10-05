let moeda1;
let moeda2;
let moedasSelecionadas = 0;
let moedas;
let bid;

const container = document.querySelector('.container');
const textoMoedas = document.querySelector('.texto-moedas');
const resultado = document.querySelector('.resultado');

document.addEventListener('click', (e)=>{
    let el = e.target;
    if (el.classList.contains('button')){
        if(moedasSelecionadas < 1) {
            moeda1 = el.innerText;
            textoMoedas.innerText = `Convertendo de ${moeda1} para ___`;
            moedasSelecionadas += 1;
            return;
        }
        if(moedasSelecionadas = 1) {
            moeda2 = el.innerText;

            if(moeda2 === 'BRL') currency = 'R$';
            if(moeda2 === 'USD') currency = 'US$';
            if(moeda2 === 'CAD') currency = 'C$';
            if(moeda2 === 'GBP') currency = '£';
            if(moeda2 === 'EUR') currency = '€';
            if(moeda2 === 'BTC') currency = 'BTC$';

            textoMoedas.innerText = `Convertendo de ${moeda1} para ${moeda2}`;
            converteMoeda(moeda1, moeda2, currency);
            moedasSelecionadas += 1;
        }

        if (moedasSelecionadas > 0) limparCampos();
    }
});

function limparCampos() {
    moedasSelecionadas = 0;
    moeda1 = '';
    moeda2 = '';
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
