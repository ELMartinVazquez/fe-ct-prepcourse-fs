function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
  cb();
}

function MiCalback (){
  console.log("El CalBack ha sido invocado correctamente");
};

invocarCallback(MiCalback);

module.exports = invocarCallback;
