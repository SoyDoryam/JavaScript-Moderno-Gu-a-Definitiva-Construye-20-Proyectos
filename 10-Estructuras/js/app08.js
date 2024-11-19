const autentificado = true;

if (autentificado) {
  console.log("El usuario esta autentificado");
}

const puntaje = 450;
function revisarPuntaje() {
  if (puntaje > 400) {
    console.log("Excelente!!!");
    return;
  }

  if (puntaje > 300) {
    console.log("Buen Puntaje.... felicidades");
    return;
  }
}

revisarPuntaje();
