const meses = ["Enero", "Febrero", "Marzo", "April", "Mayo", "Junio", "Julio"];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

//Cuanto mide un arreglo
console.log(meses.length);

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i], i);
}
