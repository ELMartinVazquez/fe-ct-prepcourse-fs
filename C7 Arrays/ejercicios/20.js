function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every(elemento => elemento === array[0]);

}

todosIguales([6,6,6,6,6]);

module.exports = todosIguales;
