// Operador mayor que o mernor que
const dinero = 100;
const totalPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalPagar) {
  console.log("si podemos pagar");
} else if (cheque) {
  console.log("si tengo un cheque");
} else if (tarjeta) {
  console.log("si puedo pagar porque tengo un tarjeta");
} else {
  console.log("fondos insuficientes");
}
