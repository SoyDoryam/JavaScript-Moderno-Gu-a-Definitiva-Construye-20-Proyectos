iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuariosAutentificador('Pablo');
}

function usuariosAutentificador(nombre){
    console.log('Autenticado usuario... espere...');
    console.log(`usuario autentficado exitosamente: ${nombre}`)
}