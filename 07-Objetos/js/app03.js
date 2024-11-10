const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades del objeto
delete producto.imagen;

console.log(producto);
