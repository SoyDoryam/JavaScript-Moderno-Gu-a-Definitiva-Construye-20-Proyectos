const carrito = [];

//Definir un producto
const producto = {
  nombre: "monitor",
  precio: 400,
};

const producto2 = {
  nombre: "celular",
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

carrito.unshift(producto3);

console.table(carrito);
