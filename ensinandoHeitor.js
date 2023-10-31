export default class Gerador {
    constructor(){
        this.simbol = '!@#$%&*()_-=+[]{}^~;:.,<>';
    }

    rand = (min, max) => String(Math.floor(Math.random() * (max - min) + min));
    geraNumeros = () => String.fromCharCode(this.rand(48, 57));
    geraLetraMai = () => String.fromCharCode(this.rand(65, 90));
    geraLetraMin = () => tring.fromCharCode(this.rand(97, 122));
    geraSimbolo = () => simbol[this.rand(1, 24)];
}