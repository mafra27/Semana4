//Faça um programa que dado um número, imprime no 
//(console.log) a tabuada do mesmo de 1 a 10.

function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        multiplicacao = num * i;
        result = console.log(`${num} x ${i} = ${multiplicacao}`)
    }
    return result
}
console.log(tabuada(9))