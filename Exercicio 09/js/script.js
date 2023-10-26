//9. Crie uma função chamada "concatenaTexto" que recebe dois parâmetros, "texto1" e "texto2". A função deve concatenar os dois textos recebidos e retornar o resultado. Em seguida, chame a função "concatenaTexto" com diferentes valores para "texto1" e "texto2" e exiba o resultado no console.

let nome1 = `José`
let sobrenome = `Silva`

function concatenaTexto (name1, name2){
    return(name1 + " " + name2)
}

console.log(concatenaTexto(nome1,sobrenome))