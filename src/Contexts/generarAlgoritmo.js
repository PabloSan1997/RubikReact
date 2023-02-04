import React from "react";
function useGenerarAlgoritmo() {
    const [generar, setGenerar] = React.useState(true);
    const [algoritmo, setAlgoritmo] = React.useState("");
    React.useEffect(() => {
      let cadena = [];
      let caracteres = ["U", "R", "F", "L", "D", "B"];
      let numi = 5;
      let num = 5;
      for (let i = 0; i < 20; i++) {
        while (numi === num) {
          num = parseInt(Math.random() * 6);
        }
        numi = num;
        let num2 = parseInt(Math.random()*3);
        if(num2===0){
          cadena[i] = caracteres[num];
        }else if(num2===1){
          cadena[i] = caracteres[num]+"'";
        }else if(num2===2){
          cadena[i] ="2" +caracteres[num];
        }
      }
      setAlgoritmo(cadena.join(" "));
    }, [generar]);
    return { algoritmo, setGenerar };
  }
export {useGenerarAlgoritmo}  