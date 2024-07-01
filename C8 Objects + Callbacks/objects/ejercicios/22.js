function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   const normalize = str => str.replace(/\s/g, '').toLowerCase();
   const sorted = str => normalize(str).split('').sort().join('');

  
   return sorted(str1) === sorted(str2);

}

console.log(esAnagrama("elvis","levis"));

module.exports = esAnagrama;
