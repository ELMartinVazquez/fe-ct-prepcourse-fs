function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let NuevoArray = [];
  

 for (i=0; i<array.length; i++){
  NuevoArray.push(array[i]*2);
  
 } 

 return NuevoArray;
}
duplicarElementos([2,4,5,7]);


module.exports = duplicarElementos;
