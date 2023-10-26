/*6. Crie uma função chamada "imprimeImpares" que recebe um parâmetro "num". A função deve imprimir no console todos os números ímpares de "num" até 0, em ordem decrescente. Em seguida, chame a função "imprimeImpares" com diferentes valores para "num" e exiba o resultado no console.*/

let num = Number(prompt(`Digite um número:`))

function impnumber (n){
    for(i = 100; i >= n; i--){
        if(i % 2 !== 0){
        console.log(i)
        }
    }     
}

let result = impnumber(num);
console.log(result);