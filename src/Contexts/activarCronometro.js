import React from "react";

function useCronometro(){
    const [activar, setActivar]=React.useState(false);
    React.useEffect(()=>{
      window.addEventListener('keyup', iniciar);
    },[]);
    function iniciar(){
      window.addEventListener('keypress', pausar);
      window.removeEventListener('keyup', iniciar);
      setActivar(true);
    }
    function pausar(){
      window.removeEventListener('keypress', pausar);
      setTimeout(()=>{
        window.addEventListener('keyup', iniciar);
      },500);
      console.log('paulsa');
      setActivar(false);
    }
    return { activar}
  }

  export{useCronometro};