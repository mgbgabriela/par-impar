/*Ejercicio – Par/Impar
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/

let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click" , () => {

  let numero: number = Number(dato.value);

  if (numero%2==0) {
    console.log("El numero es par")
  } else {
    console.log("el numero es impar")
  } else if (numero==0) {
    console.log("El numero es cero")
  }
})
