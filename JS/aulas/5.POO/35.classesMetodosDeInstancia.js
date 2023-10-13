// Metodos estaticos

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    
    // Método de instancia
    // trocaPilha(){
    //     console.log ('Pilhas trocadas');
    // }

    // Método estático
    static trocaPilha(){
        console.log ('Pilhas trocadas');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();