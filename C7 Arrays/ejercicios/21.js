function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
 const Meses = ['Enero','Marzo','Noviembre'];
 const ArrayMesesEcontrados = [];

 for (i=0; i<array.length; i++ ){
  if (Meses.includes(array[i])){
    ArrayMesesEcontrados.push(array[i])
  }
 }

if (ArrayMesesEcontrados.length === Meses.length){
  return ArrayMesesEcontrados;
}else{
  return "No se encontraron los meses pedidos";
}


}

mesesDelAño(['Diciembre','Enero','Septiembre','Marzo','Abril','Noviembre']);

module.exports = mesesDelAño;
