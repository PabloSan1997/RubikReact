import React from "react";
import { Contexto } from "../Contexts";
import './index.css';
function Cabeza(){
    const [textoSal, setTextoSal]=React.useState(false);
    const {algoritmo, modificarDatos, setGenerar}=React.useContext(Contexto); 
    function reinicio(){
        setGenerar(algoritmo);
        modificarDatos([]);
    }
    return (
        <header className="cabeza">
            <h1 
            className="titulo" 
            onMouseOver={()=>setTextoSal(true)}
            onMouseLeave={()=>setTextoSal(false)}
            onClick={reinicio}
            >
                {textoSal?"Reiniciar":"Cronometro"}
            </h1>
            <div className="algorit">
                <p className="texto">{algoritmo}</p>
            </div>
        </header>
    );
}
export{Cabeza}