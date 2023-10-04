function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', ()=>{
                if (e.keycode === 13) this.realizaConta();
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); 
        },

        realizaConta(){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', e=>{
                const el = e.target;
                if (el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText);
                if (el.classList.contains('btn-clr')) this.clearDisplay();
                if (el.classList.contains('btn-del'))this.apagaUm();
                if (el.classList.contains('btn-equ'))this.realizaConta();
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor; 
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();