import React from "react";
import { Contexto } from "../Contexts";
import './index.css'
function Resultados(){
    const {pasar , datos}=React.useContext(Contexto);
    return (
        <div className="resultados">
            <div className="finales">
                <div className="caja">
                    <div className="parte uno">
                        <p className="titulo">Media</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(1205)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Mejor</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(1205)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Peor</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(1205)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Avg5</p>
                    </div>

                    <div className="parte dos">
                    <p className="numero">{pasar(1205)}</p>
                    </div>
                </div>
            </div>
            <div className="tiros">
                <div className="caja1">
                    <div className="col">
                        <p className="subti">Num:</p>
                    </div>
                    <div className="col">
                        <p className="subti">Tiempo:</p>
                    </div>
                    <div className="col">
                        <p className="subti">Revoltura:</p>
                    </div>
                </div>
                {datos.map(elemento=>(
                    <Filas
                    key={elemento.id}
                    num={elemento.id}
                    tiempos={elemento.tiempa}
                    movida={elemento.movida}
                    onCambiar={pasar}
                    />
                ))}
            </div>
        </div>
    );
}

function Filas(props){
    return (
        <div className="fila">
            <div className="col">
                <p className="num">{props.num}</p>
            </div>
            <div className="col">
                <p className="tiemp">{props.onCambiar(props.tiempos)}</p>
            </div>
            <div className="col">
                <p className="num">{props.movida}</p>
            </div>
        </div>
        
    );
}
export {Resultados}