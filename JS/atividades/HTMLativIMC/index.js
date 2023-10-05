const form        = document.getElementById('form');
const resultado   = document.querySelector('.resultado');
const inputPeso   = form.querySelector('#input-peso');
const inputAltura = form.querySelector('#input-altura');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const peso     = Number(inputPeso.value);
    const altura   = Number(inputAltura.value);
    const imc      = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    if (!peso) {
        setResultado('Peso Inválido!', false);
        return;
    } else if(!altura){
        setResultado('Altura Inválida!', false);
        return;
    }

    setResultado(`Seu IMC é ${imc} (${nivelImc}).`, true);
});

const setResultado = function(msg, isvalid){
    resultado.innerHTML = '';

    const p = criaP();

    isvalid ? p.classList.add('resultado-top') : p.classList.add('resultado-ruim');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

const criaP = () => document.createElement('p');
const getImc = (peso, altura) => (peso/(altura**2)).toFixed(2);

const getNivelImc = function (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9)return nivel[5];
    if(imc >= 34.9)return nivel[4]; 
    if(imc >= 29.9)return nivel[3];  
    if(imc >= 24.9)return nivel[2];  
    if(imc >= 18.5)return nivel[1]; 
    if(imc < 18.5) return nivel[0];
}