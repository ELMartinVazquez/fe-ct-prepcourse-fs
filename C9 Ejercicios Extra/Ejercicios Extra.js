/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
   const ArrayClaveValor = [];
  for (let i in objeto){
    const pair = [i, objeto[i]] ;

    ArrayClaveValor.push(pair); 
  }
  return ArrayClaveValor;

  }
console.log(deObjetoAarray({D: 1, B: 2, C: 3}))

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let ObjetoNuevo={};
  let Array = string.split('').sort();

  for ( var Char of Array){
    if(ObjetoNuevo[Char]){
      ObjetoNuevo[Char]++;
    }else{
      ObjetoNuevo[Char]=1;
    }
  }
  return ObjetoNuevo;

  }
 
console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let arrayMayusculas = [];
  let arrayMinusculas = [];
  var nuevoArray = string.split('');

  for(i=0; i<nuevoArray.length; i++){
    if (/[A-Z]/.test(nuevoArray[i])){
      arrayMayusculas.push(nuevoArray[i])
    } 
  }

  for(i=0; i<nuevoArray.length; i++){
    if(!(/[A-Z]/.test(nuevoArray[i]))){
      arrayMinusculas.push(nuevoArray[i]);

    }
  }
 return arrayMayusculas.join('') + arrayMinusculas.join('');

}

console.log(capToFront("DESArrollaDOR"))

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let ArrayPalabras = frase.split(' ');

  const palabrasInvertidas = ArrayPalabras.map(palabra => {
    return palabra.split('').reverse().join('');
  });

  const fraseInvertida = palabrasInvertidas.join(' ');

  return fraseInvertida;

}

console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var ComoNumero = numero;
  var ComoString = numero.toString();
  var ComoArray = ComoString.split('').reverse().join('');

  if(ComoNumero == ComoArray){
    return "Es capicua";
  }else {
    return "No es capicua";
  }
}

console.log(capicua(12321));

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let NuevoString = [];
 
  for(i=0; i<string.length; i++){
    if(!(string[i]=="a" || string[i]=="b" || string[i]=="c")){
      NuevoString.push(string[i]);

    }
    
  }
  return NuevoString.join('');

}

console.log(deleteAbc("elvia"));

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
return arrayOfStrings.sort((a,b) => a.length - b.length);


}
console.log(sortArray(["You", "are", "beautiful", "looking"]));

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  const ElementosIguales = [];  
  const set1 = new Set(array1); 

  for (i=0; i<array2.length; i++){
    if(set1.has(array2[i])){
       ElementosIguales.push(array2[i]);
    }
  }
  return ElementosIguales;
    
  } 

 // return [];



console.log(buscoInterseccion([4,2,3],[1,10,12]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
