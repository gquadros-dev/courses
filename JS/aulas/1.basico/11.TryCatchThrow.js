// function soma (x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('x e y pricsam ser números.');
//     } 
//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(error) {
//     // console.log(error);
//     console.log('alguma coisa amigável ao usuário.')
// }


// try {
//     // É executado quando não há erros
// } catch (e) {
//     // É executado quando há erros
// } finally {
//     // Sempre é executado
// }


function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('tenha um bom dia');
}
