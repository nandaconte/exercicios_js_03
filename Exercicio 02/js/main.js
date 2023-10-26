/* 
2. Crie uma função chamada "media" que recebe três parâmetros, "a", "b" e "c". A função deve calcular a média dos três valores e retornar o resultado. Em seguida, chame a função "media" com valores diferentes e exiba o resultado no console.
*/

let media1 = 5;
let media2 = 4;
let media3 = 9;

function mediaAluno(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3
}

let result = mediaAluno(media1, media2, media3);

console.log(result);