for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    continue;
    //   brear;
  }
  console.log(`Numero: ${i}`);
}

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
// Bucle que recorre cada producto en el carrito
for (let i = 0; i < carrito.length; i++) {
  // Verificamos si el producto tiene descuento
  if (carrito[i].descuento) {
    // Si el producto tiene descuento, imprimimos un mensaje especial
    console.log(`EL carrito ${carrito[i].nombre} tiene descuento`);

    // Saltamos a la siguiente iteración del bucle sin ejecutar lo siguiente
    continue;
    // break;
  }

  // Si el producto no tiene descuento, solo imprimimos su nombre
  console.log(`${carrito[i].nombre}`);
}
