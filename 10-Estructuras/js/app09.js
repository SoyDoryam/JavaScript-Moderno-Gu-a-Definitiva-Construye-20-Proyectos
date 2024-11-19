const usuario = {
  autentificado: true,
  puedePagar: true,
  rol: "admin",
};

const action = "eliminarUsuario";

const mensaje = usuario.autentificado
  ? usuario.tieneSuscripcionActiva
    ? action === "eliminarUsuario"
      ? "El usuario es administrador y puede eliminar usuarios"
      : "El usuario puede acceder a otras funcionalidades"
    : "El usuario debe tener una suscripción activa"
  : "El usuario debe autenticarse primero";
console.log(mensaje);
