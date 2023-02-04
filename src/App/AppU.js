import React from "react";
import { Cabeza } from "../cabeza";
import { Cronometro } from "../crono";
import { Resultados } from "../resultados";


function AppU(){
    return (
        <React.Fragment>
            <Cabeza/>
            <Cronometro/>
            <Resultados/>
        </React.Fragment>
    );
}

export{
    AppU
}