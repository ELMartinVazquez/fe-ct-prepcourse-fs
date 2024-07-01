const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let SumaPrpiedades = 0;
for (var NumPropiedades in objeto){
  if(objeto.hasOwnProperty(NumPropiedades)){
    SumaPrpiedades++ 
  }
      
}
return SumaPrpiedades;

};

console.log(contarPropiedades({nombre: "Luz", edad: 23, carrera: "Informática", matricula: "16TEO173*"}));


module.exports = contarPropiedades;
