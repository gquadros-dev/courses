class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligarDesligar() {
        this.ligado = !this.ligado;
        return this.ligado;
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligarDesligar(){
        console.log('Você alterou o método ligar');
    }
}


const t1 = new Tablet('iPad', true);

const s1 = new Smartphone('iPhone', 'Preto', '7');
console.log(s1);
