function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let ArrayNuevo = [];
for (i=0; i<array.length; i++){
  ArrayNuevo.push(array[i] * i)

}

return ArrayNuevo;
}


multiplicarElementosPorIndice([2,4,6,7]);

module.exports = multiplicarElementosPorIndice;
