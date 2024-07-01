function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const NuevoArray = [];
  
   
   for(i=0; i<arrayOfStrings.length; i++){
      
      if(arrayOfStrings[i].startsWith('a')){
         NuevoArray.push(arrayOfStrings[i]);

      }
   }

   return NuevoArray;
}

console.log(filter(["alice","alberto","iva"]));

module.exports = filter;
