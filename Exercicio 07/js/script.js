// Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.

let altura = Number(prompt(`Dígite o valor refetente a altura da figura`))
let base = Number(prompt(`Dígite o valor refetente a base da figura`))

function area(n1, n2){
    return(n1*n2)
}

console.log(area(altura,base))