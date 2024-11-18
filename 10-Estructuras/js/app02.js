const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje); // Imprime: number
console.log(typeof puntaje2); // Imprime: string

if (puntaje != 1000) {
  // != diferente == igual a
  console.log("si! es diferente");
}

if (puntaje === "1000") {
  // != diferente == igual a
  console.log("Si es igual!");
} else {
  console.log("No es igual");
}

// ==    Operador que no es estricto
// ===   Operador Estricto

// Tabla comparativa de operadores de igualdad en JavaScript

// | Operador  | Descripción               | Ejemplo       | Resultado
// | ==        | Igualdad no estricta      | 10 == "10"    | true (JavaScript convierte "10" a un número)
// | ===       | Igualdad estricta         | 10 === "10"   | false (Tipos diferentes)
// | !=        | Desigualdad no estricta   | 10 != "10"    | false (JavaScript convierte "10" a un número)
// | !==       | Desigualdad estricta      | 10 !== "10"   | true (Tipos diferentes)
