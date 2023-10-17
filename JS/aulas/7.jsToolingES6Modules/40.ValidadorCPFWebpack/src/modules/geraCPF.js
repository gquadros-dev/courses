import ValidaCPF from './validaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' + 
            cpf.slice(6, 9) + '-' + 
            cpf.slice(9, 11)
        );
    }

    geraNovoCPF(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCPF);
    }
}