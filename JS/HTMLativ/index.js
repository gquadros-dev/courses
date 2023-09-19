const form = document.getElementById('form');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    setResultado('')
});

const setResultado = function(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}