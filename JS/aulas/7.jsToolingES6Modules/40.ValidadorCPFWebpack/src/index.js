import GeraCPF from './modules/geraCPF';
import './assets/css/styles.css'

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})();