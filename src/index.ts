let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click" , () => {

  let numero: number = Number(dato.value);

  if (numero%2==0) {
    console.log("El numero es par")
  } else {
    console.log("el numero no es par")
  } else if (numero==0) {
    console.log("El numero es cero")
  }
})
