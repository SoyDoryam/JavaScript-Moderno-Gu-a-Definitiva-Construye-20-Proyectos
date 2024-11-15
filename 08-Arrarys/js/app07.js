const carrito = [];

//definir un producto:
const producto = {
  nombre: "Monitor 32",
  precio: 400,
};

const producto2 = {
  nombre: "celular",
  precio: 800,
};

const producto4 = {
  nombre: "Teclado",
  precio: 20,
};

//.push agregar al final de un arreglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar al inicio de un arreglo
carrito.shift();
console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);
