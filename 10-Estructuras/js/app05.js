//Swicht case

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    pagar();
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log(
      `Aun no has selecionado un metodo de pago o metodo de pago no soportado`
    );
    break;
}

function pagar() {
  console.log("Pagando...");
}
