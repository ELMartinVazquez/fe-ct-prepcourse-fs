function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  
  array.push(elemento);
 
  return array;
  
}

agregarItemAlFinalDelArray(['Elvia','Luz','Martin'],'Elemento');

module.exports = agregarItemAlFinalDelArray;
