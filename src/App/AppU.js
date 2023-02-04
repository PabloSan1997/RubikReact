import React from "react";
import { Cabeza } from "../cabeza";
import { Cronometro } from "../crono";
import { Resultados } from "../resultados";
import {CuadroConfirmar} from "../confirmacion";
import { Contexto } from "../Contexts";

function AppU(){
    const {mostrar}=React.useContext(Contexto);
    return (
        <React.Fragment>
            <Cabeza/>
            <Cronometro/>
            <Resultados/>
           { mostrar ? <CuadroConfirmar/>:''}
        </React.Fragment>
    );
}

export{
    AppU
}