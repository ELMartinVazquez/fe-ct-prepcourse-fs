function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   //return array.idexOf(num); // Este metodo tambien resuelve el problema 
   
   for (let i = 0; i<array.length; i++){

      if (array[i] === num){
         return i;
      }  
   }

   return -1;

}

encontrarElemento(4,[3,4,2,6]);


module.exports = encontrarElemento;
