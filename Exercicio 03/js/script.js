// Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.

let  a = 52
let  b = 20  
let  c = 49 

function maiorValor(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return(`O ${n1} é o maior entre eles a lenda o mito uma maquina `)
    }else if (n2 > n1 && n2 > n3){
        return(`O ${n2} é o maior entre eles a lenda o mito uma maquina `)
    }else{
        return(`O ${n3} é o maior entre eles a lenda o mito uma maquina `)
    } 
    
}

let result = maiorValor (a, b, c)
console.log(result)