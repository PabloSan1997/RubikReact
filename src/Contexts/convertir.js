function pasar(valor) {
  let num = valor % 1000;
  let milis = num;
  num = (valor - num) / 1000;
  let segundos = num % 60;
  num = (num - segundos) / 60;
  let minutos = num % 60;
  num = (num - minutos) / 60;
  let horas = num % 60;
  milis = quitar(milis);
  minutos = quitarMinutos(minutos);
  segundos = quitarMinutos(segundos);
  let texto;
  if (horas === 0) {
    texto = `${minutos}:${segundos}.${milis}`;
  } else {
    texto = `${horas}:${minutos}:${segundos}.${milis}`;
  }
  return texto;
}
function quitar(nu) {
  if (nu < 10) {
    return "00";
  } else if (nu >= 10 && nu < 100) {
    nu = nu.toString();
    let cadena = nu.split("");
    cadena.pop();
    return 0 + cadena.join("");
  } else {
    nu = nu.toString();
    let cadena = nu.split("");
    cadena.pop();
    return cadena.join("");
  }
}
function quitarMinutos(valor) {
  if (valor < 10) {
    return "0" + valor;
  }
  return valor;
}

export { pasar };
