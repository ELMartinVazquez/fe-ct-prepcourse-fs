function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
const NuevoArray1 = string.split('');
const ArrayInvertido = NuevoArray1.reverse();
const ArrayDeRegreso = ArrayInvertido.join('');

if(string === ArrayDeRegreso){
  return true;
}else {
  return false;
}
}
console.log(esPalindromo('oscar'))

module.exports = esPalindromo;