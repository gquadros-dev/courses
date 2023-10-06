// Factory Function

function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        
        // getters
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //Setters
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(this.nome, this.sobrenome);
        },

        fala(assunto = 'nada!'){
            return `${this.nome} está falando sobre ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Gabriel Fernando de Quadros';
console.log(p1.fala());

