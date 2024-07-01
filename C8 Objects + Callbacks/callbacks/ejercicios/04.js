function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   const Suma= arrayOfNumbers.reduce((total, num) => total + num, 0);
   cb(Suma);
   
      
};

   function ImprimirTotal(sumaTotal){
      console.log(`La suma de los números es: ${sumaTotal}`);

   };


console.log(sumarArray([2,5,3,9,11],ImprimirTotal));

module.exports = sumarArray;
