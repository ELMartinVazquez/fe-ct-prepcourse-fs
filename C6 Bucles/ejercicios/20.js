function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var sum = 0;
   for (i=0; i<=n; i++){
     sum = sum + i;
     if (sum>=100){
      break;
     }
     }
     console.log(sum);
   return sum;
   
   }
   
   
   sumarHastaNConBreak(4);



  
module.exports = sumarHastaNConBreak;
