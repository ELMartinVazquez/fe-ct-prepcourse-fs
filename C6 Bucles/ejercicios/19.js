function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
   suma = 0;
for (i=0; i<=n; i++){
  suma = suma + i;

}
console.log(suma);
return suma;
}
sumarHastaN(10);

module.exports = sumarHastaN;
