//crear variables
const hola = "Hola desde la consola";
//crear arreglos
console.log([1, 2, 3, 4]);
//También puedes usar console.table() para mostrar los datos en formato tabular:
console.table([1, 2, 3, 4]);

//enviar mensajes de error
console.error("Algo salió mal");

//advertencia
console.warn("Esto no está permitido");

//limpiar console
console.clear();

//Puedes medir el tiempo que tarda en ejecutarse un bloque de código usando console.time() y console.timeEnd():
console.time("Tiempo");
// Código que deseas medir
console.timeEnd("Tiempo");

//crear y manipular objetos
const obj = { nombre: "Juan", edad: 30 };
console.log(obj);
