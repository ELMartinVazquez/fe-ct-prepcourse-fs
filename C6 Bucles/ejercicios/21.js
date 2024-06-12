function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:




  while (numero * 2 === 2 || numero * 2 === 4 || numero * 2 === 8 || numero * 2 === 16 || numero * 2 === 32 || numero * 2 === 64 || numero * 2 === 128 || numero * 2 === 256 ){
    return true;
  }

  return false;
}

esPotenciaDeDos (3);

module.exports = esPotenciaDeDos;
