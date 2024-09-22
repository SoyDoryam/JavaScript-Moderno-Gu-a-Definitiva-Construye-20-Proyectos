// math es la parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy utlies y algunas actuan de forma algo extrañas, asi que vamos a verlas

let resultado;
// PI
resultado = Math.PI;
console.log(`Math.PI = ${resultado}`);
// Redondeo
resultado = Math.round(2.5);
console.log(`Math.round = ${resultado}`);
// Redodear abajo o arrina (cell o floor)
resultado = Math.ceil(2.2);
console.log(`Math.cell(2.2) = ${resultado}`);
// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(`Math.sqrt(144) = ${resultado}`);
// Absoluto
resultado = Math.abs(-300);
console.log(`Math.abs(-300) = ${resultado}`);
// Potencia
resultado = Math.pow(8, 3);
console.log(`Math.pow(8, 3) = ${resultado}`);
// Minimo
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
console.log(`Math.min(3,5,1,2,9,4,2,-3) = ${resultado}`);
// Max
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
console.log(`Math.max(4, 1, 21, 4, 15, 5, 11, 5) = ${resultado}`);
// Aleatorio
resultado = Math.random();
console.log(`Math.random() = ${resultado}`);
// Redondear dentro de un rando
resultado = Math.floor(Math.random() * 30);
console.log(`Math.floor(Math.random() * 30) = ${resultado}`);
