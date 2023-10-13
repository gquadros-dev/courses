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
    constructor(cor, modelo){
        super();
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '7');
console.log(s1);
