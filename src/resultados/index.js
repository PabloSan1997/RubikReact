import React from "react";
import { Contexto } from "../Contexts";
import './index.css'
function Resultados(){
    const {pasar , datos, mediana, mejor, peor, avg5, setNumId, setMostrar, setMetodo}=React.useContext(Contexto);
    let nume = 0;
    return (
        <div className="resultados">
            <div className="finales">
                    <div className="parte uno">
                        <p className="titulo">Media</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(mediana)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Mejor</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(mejor)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Peor</p>
                    </div>
                    <div className="parte dos">
                    <p className="numero">{pasar(peor)}</p>
                    </div>

                    <div className="parte uno">
                        <p className="titulo">Avg5</p>
                    </div>

                    <div className="parte dos">
                    <p className="numero">{pasar(avg5)}</p>
                    </div>
            </div>
            <div className="tiros">
                <div className="caja1">
                    <div className="col unos">
                        <p className="subti">Num:</p>
                    </div>
                    <div className="col doss">
                        <p className="subti">Tiempo:</p>
                    </div>
                    <div className="col tress">
                        <p className="subti">Revoltura:</p>
                    </div>
                </div>
                {datos.map(elemento=>{
                    nume++
                    return (
                        <Filas
                        key={elemento.id}
                        num={elemento.id}
                        tiempos={elemento.tiempa}
                        movida={elemento.movida}
                        onSenalar={setNumId}
                        onCambiar={pasar}
                        onMostrar={setMostrar}
                        onMetodo={setMetodo}
                        elegirColor={nume}
                        />
                    )
                })}
            </div>
        </div>
    );
}

function Filas(props){
    const funcion = ()=>{
        props.onMostrar(true);
        props.onSenalar(props.num);
        props.onMetodo(2);
    }
    return (
        <div 
        className={`fila ${props.elegirColor%2===0 ? 'color1':'color2'}`}
        onClick={funcion}
        >
            <div className="col unos">
                <p className="num">{props.num}</p>
            </div>
            <div className="col doss">
                <p className="tiemp">{props.onCambiar(props.tiempos)}</p>
            </div>
            <div className="col tress">
                <p className="num">{props.movida}</p>
            </div>
        </div>
        
    );
}
export {Resultados}