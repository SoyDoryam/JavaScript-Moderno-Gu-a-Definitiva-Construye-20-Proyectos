const reproductor = {
  // Este objeto representa un reproductor de música básico.
  // Contiene métodos para simular las acciones de un reproductor.

  reproducir: function (id) {
    // Este método reproduce una canción.
    // Toma el ID de la canción como parámetro.
    console.log(`Reproduciendo la canción con el id: ${id}`);
  },

  pausar: function () {
    // Este método pausa la reproducción actual.
    console.log(`Pausando.....`);
  },

  borrar: function (id) {
    // Este método borra una canción.
    // Toma el ID de la canción como parámetro.
    console.log(`Borrando cancion... ${id}`);
  },

  createPlaylist: function (nombre) {
    // Este método crea una nueva lista de reproducción.
    // Toma el nombre de la lista como parámetro.
    console.log(`Creando playlist de ${nombre}`);
  },

  reproducirPlaylist: function (nombre) {
    // Este método reproduce una lista de reproducción.
    // Toma el nombre de la lista como parámetro.
    console.log(`Reproduciendo la playlist ${nombre}`);
  },
};

// Ejemplos de cómo utilizar los métodos del reproductor:
reproductor.reproducir(30); // Reproduce la canción con el ID 30
reproductor.reproducir(20); // Reproduce la canción con el ID 20
reproductor.pausar(); // Pausa la reproducción
reproductor.borrar(30); // Borra la canción con el ID 30
reproductor.createPlaylist("Heavy Metal"); // Crea una playlist llamada "Heavy Metal"
reproductor.createPlaylist("Rock90s"); // Crea una playlist llamada "Rock90s"
reproductor.reproducirPlaylist("Heavy Metal"); // Reproduce la playlist "Heavy Metal"
