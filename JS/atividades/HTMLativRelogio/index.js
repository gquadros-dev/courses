// const container = document.querySelector('.container');
// const h1        = document.querySelector('.container h1');

// const getData = function(){
//     const data = new Date();

//     const diaExtenso = getDayOfTheWeek(data.getDay());
//     const diaMes     = zeroAEsquerda(data.getDate());
//     const mesExtenso = getMonth(data.getMonth + 1);
//     const ano        = data.getFullYear();
//     const hora       = zeroAEsquerda(data.getHours());
//     const minutos    = zeroAEsquerda(data.getMinutes());
//     const segundos   = zeroAEsquerda(data.getSeconds());

//     return {diaExtenso, diaMes, mesExtenso, ano, hora, minutos, segundos};
// }

// const getDayOfTheWeek = function(diaSemana){

//     switch (diaSemana){
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-Feira';
//         case 2:
//             return 'Terça-Feira';
//         case 3:
//             return 'Quarta-Feira';
//         case 4:
//             return 'Quinta-Feira';
//         case 5:
//             return 'Sexta-Feira';
//         case 6:
//             return 'Sábado';
//         default:
//             return '';
//     }
// }

// const getMonth = function(month){

//     switch (month){
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//         default:
//             return '';
//     }
// }

// const zeroAEsquerda = num => num >= 10 ? num : `0${num}`

// const setTextoHTML = function(){
//     const dataAtual = getData();
//     h1.innerHTML = `${dataAtual.diaExtenso}, ${dataAtual.diaMes} de ${dataAtual.mesExtenso} de 
//         ${dataAtual.ano} ${dataAtual.hora}:${dataAtual.minutos}:${dataAtual.segundos}`;
// }

// setInterval(setTextoHTML, 1000);

const h1     = document.querySelector('.container h1');
const data   = new Date();

setInterval(() => h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}), 1000);
