const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', e => {
    if(e.keyCode === 13) btnTarefa.click();
});

const criaElemento = tipoElemento => document.createElement(tipoElemento);

const limpaInput = () => {
   inputTarefa.value = '';
   inputTarefa.focus();
}

const criaTarefa = textoInput =>{
    const li = criaElemento('li');
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}

const criaBotaoApagar = li => {
    const botaoApagar = criaElemento('button');
    botaoApagar.innerText = 'Apagar';
}