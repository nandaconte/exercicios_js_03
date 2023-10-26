// Crie uma função chamada "verificaPrimo" que recebe um parâmetro "num". A função deve verificar se o número recebido é primo e exibir uma mensagem no console informando se é ou não primo. Em seguida, chame a função "verificaPrimo" com diferentes valores para "num" e exiba o resultado no console.

let num = parseInt(prompt("Digite um número: "));

 

function verificaPrimo(num) {
    if (num <= 1) {
      console.log(num + " não é primo.");
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(num + " não é primo.");
        return;
      }
    }
     console.log(num + " é primo.");
  } 

verificaPrimo(num);
