function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   return list.sort((a, b) => {
      // Comparar los valores de la propiedad sortBy de a y b de forma descendente
      if (a[sortBy] > b[sortBy]) {
        return -1;
      } else if (a[sortBy] < b[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    });


}

console.log(sort("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]));

module.exports = sort;
