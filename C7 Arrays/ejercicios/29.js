function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0){
    return null;
  }
 
  const NumeroMin = Math.min(...numeros);
  const NumeroMax = Math.max(...numeros);

 const NumerosSet = new Set(numeros);

 for (i = NumeroMin; i<= NumeroMax; i++){
  if (!NumerosSet.has(i)){
    return i;
  }
 }
 return null; // Sí no encuentra níngun faltante, retorna null

}

console.log(encontrarNumeroFaltante([1,2,3,4,6,7,8,9]));

module.exports = encontrarNumeroFaltante;