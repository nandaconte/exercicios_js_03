/*
 1. Crie uma função chamada "soma" que recebe dois parâmetros, "a" e "b". A função deve calcular a soma dos dois parâmetros e retornar o resultado. Em seguida, chame a função "soma" com valores diferentes e exiba o resultado no console.
*/

let a = 10;
let b = 5;
let c = 20;
let d = 5;

function soma(num1, num2){
    return num1 + num2;
}

let result1 = soma(a,b);
let result2 = soma(c,d);
let result3 = soma(a,c);
let result4 = soma(d,b);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
