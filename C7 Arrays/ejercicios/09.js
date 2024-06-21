function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   const elementoleatorio = Math.floor(Math.random() * array.length);
   return array[elementoleatorio];
   

}

obtenerElementoAleatorio([2,4,1,8]);





module.exports = obtenerElementoAleatorio;
