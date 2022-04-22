//Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

let isPar = 1;
while (isPar <= 100) {
    let sobra = isPar % 2;
    if (sobra == 0) {
        console.log("Par " + isPar);
    }
    isPar = isPar + 1;
}
console.log("FIM")