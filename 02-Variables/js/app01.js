// Inicializar una variable con un valor
var producto = "Monitores de 24 Pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = "Monitores de 19 Pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignar después
var disponible;
disponible = true;
console.log(disponible);

// Inicializar múltiples variables
var categoria = "Computadoras",
  marca = "Marca Famosa",
  calificaciones = 5;

// Las variables no pueden iniciar con números
// var 01_; // Esto causará un error
var _01; // Válido
var _usuario; // Válido
var __usuario; // Válido

// Estilos de nombres de variables
var nombreProducto; // Camel Case
var nombre_producto_categoria_precio; // Snake Case
var NombreProducto; // Pascal Case
