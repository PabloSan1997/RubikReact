import React from "react";

function useCronometro() {
  window.addEventListener("keypress", (event) => {
    event.preventDefault();
  });
  const [activar, setActivar] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("keyup", iniciar);
  }, []);
  function iniciar(event) {
    if (event.key === " ") {
      window.addEventListener("keypress", pausar);
      window.removeEventListener("keyup", iniciar);
      setActivar(true);
    }
  }
  function pausar() {
    window.removeEventListener("keypress", pausar);
    setTimeout(() => {
      window.addEventListener("keyup", iniciar);
    }, 500);
    setActivar(false);
  }
  return { activar };
}

export { useCronometro };
