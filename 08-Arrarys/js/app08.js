const producto = {
  nombre: "Monitor 30 Pulgadas",
  precio: 300,
  disponible: true,
};

// Destructuración de objeto para obtener la propiedad 'disponible'
const { disponible } = producto;
console.log(`Valor de 'disponible' en el objeto producto: ${disponible}`); // Imprime: true

// Arreglo de números
const numeros = [10, 20, 30, 40, 50];

// Ejemplo 1: Obtener el primer elemento y el resto en un nuevo arreglo
const [primero, ...resto] = numeros;
console.log(`Ejemplo 1 - Primer elemento: ${primero}`); // Imprime: 10
console.log(`Ejemplo 1 - Resto del arreglo: ${resto}`); // Imprime: [20, 30, 40, 50]

// Ejemplo 2: Obtener los tres primeros elementos
const [primero2, segundo2, tercero2] = numeros;
console.log(`Ejemplo 2 - Primer elemento: ${primero2}`); // Imprime: 10
console.log(`Ejemplo 2 - Segundo elemento: ${segundo2}`); // Imprime: 20
console.log(`Ejemplo 2 - Tercer elemento: ${tercero2}`); // Imprime: 30

// Ejemplo 3: Obtener solo el tercer elemento (usando comas para omitir)
const [, , tercero3] = numeros;
console.log(`Ejemplo 3 - Solo el tercer elemento: ${tercero3}`); // Imprime: 30

// Ejemplo 4: Obtener el primer y tercer elemento
const [primero4, , tercero4] = numeros;
console.log(`Ejemplo 4 - Primer elemento: ${primero4}`); // Imprime: 10
console.log(`Ejemplo 4 - Tercer elemento: ${tercero4}`); // Imprime: 30

// Ejemplo 5: Obtener solo el quinto elemento
const [, , , , quinto] = numeros;
console.log(`Ejemplo 5 - Solo el quinto elemento: ${quinto}`); // Imprime: 50

// Ejemplo 6: Obtener los dos primeros elementos y el resto en un nuevo arreglo
const [primero6, segundo6, ...resto6] = numeros;
console.log(`Ejemplo 6 - Primer elemento: ${primero6}`); // Imprime: 10
console.log(`Ejemplo 6 - Segundo elemento: ${segundo6}`); // Imprime: 20
console.log(`Ejemplo 6 - Resto del arreglo: ${resto6}`); // Imprime: [30, 40, 50]
