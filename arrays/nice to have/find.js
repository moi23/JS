/**
 *  find() é um metodo de array que varre os valores de um array
 *  e retorna para nós o primeiro valor que satisfaça a condição.
 *
 */

// Exemplo:

const idades = [20, 30, 40, 50, 60, 70, 80, 90, 100];

const idadeEncontrada = idades.find((item) => item > 50);

console.log("🚀 ~ file: find.js:12 ~ idadeEncontrada:", idadeEncontrada);
