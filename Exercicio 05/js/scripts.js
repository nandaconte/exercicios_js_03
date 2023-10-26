/*5. Crie uma função chamada "imprimeNumeros" que recebe um parâmetro "num". A função deve imprimir no console todos os números de 0 até "num", em ordem crescente. Em seguida, chame a função "imprimeNumeros" com diferentes valores para "num" e exiba o resultado no console.*/

let num = Number(prompt(`Digite um número:`))

function impnumber (n){
    for(i = 0; i <= n; i++){
        console.log(i);
    }
    
}

console.log(impnumber(num));