import React from "react";
function useRespuestas(infos) {
    const [mediana, setMediana] = React.useState(0);
    const [mejor, setMejor] = React.useState(0);
    const [peor, setPeor] = React.useState(0);
    const [avg5, setAvg5] = React.useState(0);
    React.useEffect(() => {
      if (infos.length >= 5) {
        let cadena = [];
        let limite = infos.length - 1;
        for (let i = 0; i < 5; i++) {
          cadena[i]=infos[limite].tiempa;
          limite--;
        }
        let medianai=sumar(cadena)/5;
        cadena=cadena.sort((a,b)=>a-b);
        let peori = cadena.pop();
        let mejori = cadena.shift();
        let avg5i = sumar(cadena)/3;
        setAvg5(parseInt(avg5i));
        setMejor(mejori);
        setPeor(peori);
        setMediana(parseInt(medianai));
        function sumar(no){
          let res=0;
          for(let i=0;i<no.length;i++){
            res+=no[i];
          }
          return res;
        }
      } else {
        setMediana(0);
        setMejor(0);
        setPeor(0);
        setAvg5(0);
      }
    }, [infos.length]);
    return { mediana, mejor, peor, avg5 };
  }
  export{useRespuestas}