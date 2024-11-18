function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);

//Ejemplo mas Avanzado
let total = 0;
function AgregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return total * 1.15;
}

total = AgregarCarrito(300);
total = AgregarCarrito(100);
total = AgregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`EL total a pagar es de ${totalPagar}`);

console.log(total);
