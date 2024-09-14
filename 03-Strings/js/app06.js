const producto = "Monitor de 20 Pulgadas";

// .repeat para repetir una cadena de texto
const texto = " en Promocion".repeat(3); // Repite el texto " en Promocion" 3 veces
console.log(texto); // Imprime: " en Promocion en Promocion en Promocion"
console.log(`${producto} ${texto}!!!`); // Imprime: "Monitor de 20 Pulgadas en Promocion en Promocion en Promocion!!!"

// .split para dividir un string en partes
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // Divide la cadena en un array de palabras: ["Estoy", "aprendiendo", "JavaScript", "Moderno"]

const hobies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobies.split(", ")); // Divide la cadena en un array basado en comas: ["Leer", "caminar", "escuchar musica", "escribir", "aprender a programar"]

const tweet = "Aprendiendo JavaScript #JavaScriptModerno";
console.log(tweet.split("#")); // Divide el string en dos partes, separando por el símbolo #: ["Aprendiendo JavaScript ", "JavaScriptModerno"]
