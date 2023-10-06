/*

&& = AND
|| = OR
! = inverte o valor (se true vira false e vice-versa)


FALSY VALUES

false
0
'' ou "" ou ``
null
undefined
NaN


tudo exceto os citados acima retornam True
*/

const corUsuario = null; // 'vermelho'
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)
