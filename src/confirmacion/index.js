import React from "react";
import { Contexto } from "../Contexts";
import './index.css';


function CuadroConfirmar(){
  const {metodo, setMostrar, setMetodo,  setGenerar, modificarDatos, numId, borrarUno}=React.useContext(Contexto);
  
  function aver(){
    if(metodo===1){
      setGenerar([]);
      setMostrar(false);
      modificarDatos([]);
    }if(metodo===2){
      borrarUno(numId);
      setMostrar(false);
      setMetodo(0);
    }
  }

    return(
      <div className="conte">
          <div className="confirmada">
            <p className="mensaje">{metodo===1?'¿Desea borrar todos los tiempos?':`¿Desea borrar el tiempo numero ${numId}?`}</p>
            <div className="area-botones">
                <span className="boton" onClick={aver}>Aceptar</span>
                <span className="boton" onClick={()=>setMostrar(false)}>Cancelar</span>
            </div>
        </div>
      </div>
    );
}
export{CuadroConfirmar}