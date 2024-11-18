const reproductor = {
  cancion: "",
  reproducir: (id) => {
    console.log(`Reproduciendo cancion con el id: ${id}`);
  },
  pausar: () => {
    console.log(`Pausando...`);
  },
  borrar: (id) => {
    console.log(`Borrando cancion... ${id}`);
  },
  creaPlaylist: (nombre) => {
    console.log(`Reproducir la playlist de: ${nombre}`);
  },
  reproducirPlaylist: (nombre) => {
    console.log(`Reproduciondo la playlist: ${nombre}`);
  },
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Agregando: ${cancion}`);
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = `Enter Sandman`;
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.creaPlaylist(`Heavy Metal`);
reproductor.creaPlaylist(`Rock 90s`);
reproductor.reproducirPlaylist(`Heavy Metal`);
