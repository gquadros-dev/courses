class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('#form');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.validPasswords();

        if(validFields && validPasswords){
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    }

    isValidFields(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value){
                this.createError(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }
            
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validPasswords(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais!');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            thise.createElement(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.createError(campo, 'CPF Inválido');
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 18){
            this.createError(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'Uuario precisa conter somente letras e/ou numeros');
            valid = false;
        }

        return valid;
    }

    createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();