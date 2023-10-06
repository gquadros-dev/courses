function* gerador1(){
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';
}

function* gerador2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

// const g1 = gerador1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

const g2 = gerador2();
console.log(g2.next().value);