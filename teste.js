const comparaNumeros = (num1, num2) => {
    return num1 === num2 ? 'números iguais' : num1 > num2 ? '1° número é maior' : '2° número é maior';
}

console.log(comparaNumeros(5, 5))