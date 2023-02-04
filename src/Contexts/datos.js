import React from "react";


function useUsarDatos(){
    if(!localStorage.registro){
        localStorage.registro=JSON.stringify([]);
    }
    const [datos, setDatos]=React.useState(JSON.parse(localStorage.registro));
    function modificarDatos(info){
        localStorage.registro=JSON.stringify(info);
        setDatos(JSON.parse(localStorage.registro));
        
    }
    return {datos, modificarDatos}
}
export{useUsarDatos}