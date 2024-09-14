const producto = "Monitor de 20 Pulgadas";

// .replace para reemplazar partes de una cadena
console.log(producto); // Imprime: "Monitor de 20 Pulgadas"
console.log(producto.replace("Pulgadas", '"')); // Reemplaza "Pulgadas" por comillas dobles
console.log(producto.replace("Monitor", "Monitor curvo")); // Reemplaza "Monitor" por "Monitor curvo"

// .slice para cortar partes de una cadena
console.log(producto.slice(0, 10)); // Corta desde el índice 0 al 10, imprime: "Monitor de"
console.log(producto.slice(8)); // Corta desde el índice 8 hasta el final, imprime: "de 20 Pulgadas"
console.log(producto.slice(2, 1)); // No imprime nada ya que el índice de inicio es mayor que el final

// .substring para obtener parte de la cadena
console.log(producto.substring(0, 10)); // Similar a slice, imprime: "Monitor de"
console.log(producto.substring(2, 1)); // Intercambia los valores si el primero es mayor, imprime: "o"

// Uso de .substring y .charAt para caracteres individuales
const usuario = "Juan";
console.log(usuario.substring(0, 1)); // Obtiene la primera letra, imprime: "J"
console.log(usuario.charAt(0)); // Similar a substring, obtiene el primer carácter, imprime: "J"
