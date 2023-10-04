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
    criaBotaoApagar(li);
    salvarTarefa();
}

const criaBotaoApagar = li => {
    const botaoApagar = criaElemento('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', (e)=>{
    const el = e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
});

const salvarTarefa = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

const carregaTarefas = () =>{
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

carregaTarefas();
