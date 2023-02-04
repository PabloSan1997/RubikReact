import React from "react";
import { Contexto } from "../Contexts";
import './index.css';

function Cronometro(){
    const {numero, pasar}=React.useContext(Contexto);
    function convertir(){
        return pasar(numero);
    }
    return (
        <div className="area-tiempo">
            <p className="numeros">{convertir()}</p>
        </div>
    );
}
export{Cronometro}