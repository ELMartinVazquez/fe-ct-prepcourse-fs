function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
 let TextoCombinado = '';
 let MaxLength = Math.max(str1.length, str2.length, str3.length);

for (i=0; i<MaxLength; i++){
  if (i < str1.length){
    TextoCombinado = TextoCombinado + str1[i];
  }

  if (i < str2.length){
    TextoCombinado = TextoCombinado + str2[i];
  }

  if (i < str3.length){
    TextoCombinado = TextoCombinado + str3[i];
  }
}

return TextoCombinado;
    

}
console.log(combine('Hola','Elvia','Amor'));

module.exports = combine;