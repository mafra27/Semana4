//Crie uma função que irá retornar um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6


let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);