const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
  console.log("Si puedes comprar");
} else if (!puedePagar && !usuario) {
  console.log("No puedes comprar");
} else if (!usuario) {
  console.log("Inicia Secion o saca una cuenta");
} else {
  console.log("Fondos insuficientes");
}
