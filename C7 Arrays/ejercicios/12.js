function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(texto =>{
    return texto.toUpperCase();
  })
}

convertirStringAMayusculas(['elvia','luz','martin','vazquez']);

module.exports = convertirStringAMayusculas;
