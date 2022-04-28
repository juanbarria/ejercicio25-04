let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  rotulo.innerHTML = "ingrese un dato:";
  console_log("el dato ingresado es ", dato.value);
});
