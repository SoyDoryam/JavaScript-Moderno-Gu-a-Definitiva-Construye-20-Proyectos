// Declaración de Función (Function Declaration)
// Las funciones declaradas con la palabra clave "function" son completamente elevadas.
// Esto significa que puedes llamar a la función antes de declararla, porque la declaración
// completa de la función se eleva al inicio del contexto de ejecución.
sumar(); // Esto funciona, imprimirá "4".

function sumar() {
  console.log(2 + 2); // Resultado: 4
}

// Expresión de Función (Function Expression)
// En este caso, estamos asignando una función anónima a una constante "sumar2".
// Las variables declaradas con "const" o "let" se elevan, pero permanecen en la
// Temporal Dead Zone (TDZ) hasta que se inicializan. Intentar acceder a "sumar2"
// antes de su inicialización arroja un ReferenceError.
sumar2(); // ReferenceError: Cannot access 'sumar2' before initialization

const sumar2 = function () {
  console.log(3 + 3); // Resultado: 6 (si se ejecuta después de la declaración)
};
