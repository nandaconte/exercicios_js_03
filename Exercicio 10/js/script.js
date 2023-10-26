//10. Crie uma função chamada "imprimeTabuada" que recebe um parâmetro "num". A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console

let num = Number(prompt(`Digite um número de 1 a 10`))

function imprimeTabuada(n){
    if( num > 10){
        console.log(`Digite um número até 10`)
    }
    for(i=1; i <= 10; i++){
        let resultado = (i * num)
        console.log(`${i} X ${num} = ${resultado}`)
    }
}

console.log(imprimeTabuada(num))

