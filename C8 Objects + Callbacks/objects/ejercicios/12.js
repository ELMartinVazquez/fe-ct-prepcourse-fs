function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
 
 let resultado = objetoMisterioso.numeroMisterioso;
 return resultado * 5
}

console.log(multiplicarNumeroDesconocidoPorCinco({num:2, numeroMisterioso:7}));

module.exports = multiplicarNumeroDesconocidoPorCinco;
