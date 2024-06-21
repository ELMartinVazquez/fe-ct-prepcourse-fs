function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  const NuevoString = palabras.join(' ')
  return NuevoString;
}

console.log(dePalabrasAFrase(['Hello','World','Elvia']));

module.exports = dePalabrasAFrase;
