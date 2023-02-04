
import React from "react";
import { useCronometro } from "./activarCronometro.js";
import { pasar } from "./convertir.js";
import { useUsarDatos } from "./datos.js";
import { useGenerarAlgoritmo } from "./generarAlgoritmo.js";

const Contexto = React.createContext();


function ProvedorContexto({ children }) {
  const { algoritmo, setGenerar } = useGenerarAlgoritmo();
  const { activar}=useCronometro(); 
  const [intervalo, setIntervalo]=React.useState('');
  const [numero, setNumero]=React.useState(0);
  const {datos}=useUsarDatos(); 
  let intervalosub;
  React.useEffect(
    ()=>{
      if(activar){
        let tiempo2, tiempo1=new Date();
        intervalosub=setInterval(()=>{
          tiempo2=new Date();
          setNumero(tiempo2-tiempo1);
        },10);
        setIntervalo(intervalosub);
      }else{
        clearInterval(intervalo);
        setIntervalo('');
      }
    }
    ,[activar]);
  return (
    <Contexto.Provider
      value={{
        algoritmo,
        setGenerar,
        numero,
        pasar,
        datos
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export { ProvedorContexto, Contexto };
