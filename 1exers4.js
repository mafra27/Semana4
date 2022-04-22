//Utilize uma estrutura de repetição para imprimir no console conforme instruções:
//a) números de 1 a 50  
//b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop
//c) números de 1 a 50, quando chegar no número 10 pule a instrução|

//A

console.log('inicio')
for (let i = 1; i <= 50; i++) {
    console.log(`Imprimindo numero ${i} com for`)
}
console.log('fim')


//b
console.log('inicio')
for (let i = 1; i <= 50; i++) {
    console.log(`Imprimindo numero ${i} com for`)

    if (i === 25) {
        break
    }
}



//C
//Nao entendi o que quis dizer com PULE A INSTRUCAO, TENTEI FAZER DO MEU JEITO. kkkrying


console.log('inicio')
for (let i = 1; i <= 50; i++) {
    console.log(`Imprimindo numero ${i} com for`)
    if (i === 10) {
        break
    }
}
console.log('fim')