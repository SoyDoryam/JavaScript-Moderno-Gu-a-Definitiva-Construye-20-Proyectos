// En este video 3 métodos para strings
const producto = "        Monitor 20 Pulgadas      ";

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio.
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos al final.

//Los metodos en JavaScript se puede encadenar, es decir, colocar uno juntoal otro
console.log(producto.trimStart().trimEnd());

// Un metodo (que ya tiene rato) es trim que hace lo mismo
console.log(`trim.length: ${producto.trim().length}`);
