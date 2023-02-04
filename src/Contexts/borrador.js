import React from "react";

function borrar(numero,info, callBack){
    let indice = info.findIndex(elemento=>elemento.id===numero);
    if(indice!=-1){
      info.splice(indice, 1);
      callBack(info);
    }
  }

  export{borrar}