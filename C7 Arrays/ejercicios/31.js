function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let NuevoArray = texto.split('');
   NuevoArray.reverse();
 
  let NuevoString = NuevoArray.join('');
   return NuevoString;
  
}

console.log(invertirTexto("Roldan"))


module.exports = invertirTexto;
