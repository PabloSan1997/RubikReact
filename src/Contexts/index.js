import React from "react";
import { useCronometro } from "./activarCronometro.js";
import { pasar } from "./convertir.js";
import { useUsarDatos } from "./datos.js";
import { useGenerarAlgoritmo } from "./generarAlgoritmo.js";
import { useRespuestas } from "./resultados.js";

const Contexto = React.createContext();

function ProvedorContexto({ children }) {
  const { algoritmo, setGenerar } = useGenerarAlgoritmo();
  const { activar, tiro } = useCronometro();
  const [intervalo, setIntervalo] = React.useState("");
  const [numero, setNumero] = React.useState(0);
  const { datos, modificarDatos } = useUsarDatos();
  const { mediana, mejor, peor, avg5 } = useRespuestas(datos);
  const [contados, setContados]=React.useState(false);
  let intervalosub;
  React.useEffect(() => {
    if (activar) {
      let tiempo2,
        tiempo1 = new Date();
      intervalosub = setInterval(() => {
        tiempo2 = new Date();
        setNumero(tiempo2 - tiempo1);
      }, 10);
      setIntervalo(intervalosub);
    } else {
      clearInterval(intervalo);
      setContados(!contados);
      setIntervalo("");
    }
  }, [activar]);
  React.useEffect(
    ()=>{
       if(numero!=0){
        let numeros =(datos.length===0)? 1: datos[datos.length-1].id+1;
        let objeto = {
          id:numeros,
          tiempa:numero,
          movida:algoritmo
        }
        let nos = datos;
        nos.push(objeto);
        modificarDatos(nos);
        setGenerar(nos);
       }
    }
    ,[contados]);
  return (
    <Contexto.Provider
      value={{
        algoritmo,
        setGenerar,
        numero,
        pasar,
        datos,
        modificarDatos,
        mediana,
        mejor,
        peor,
        avg5
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export { ProvedorContexto, Contexto };
