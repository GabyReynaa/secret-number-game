let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto)


function asigarUnTextoElemnto(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto
    return;

     
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);


if (numeroDeUsuario===numeroSecreto) {
asigarUnTextoElemnto("p",`Good job! You did it ${intentos} ${(intentos===1) ? "time" : "times"}`);
document.getElementById("reiniciar").removeAttribute("disabled");

}else{
  // Si el usuario no acertó
  if(numeroDeUsuario > numeroSecreto) {
    asigarUnTextoElemnto ("p", "less");
  }else {
    asigarUnTextoElemnto ("p","more");
  }
  intentos++;
  limpiarCaja ();
}


return; 
}

function limpiarCaja (){
  document.querySelector ("#valorUsuario").value ="";
  }
  function generarUnNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si sorteamos todos los números mostrar una frase y cerrar el juego.
   
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if (numerosSorteados.length == numeroMaximo) {
      asigarUnTextoElemnto ("p", "There's no numbers left");
    } else 
      
     if (numerosSorteados.includes(numeroGenerado)) {
      return generarUnNumeroSecreto(numeroGenerado);
    
     } else {
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
     }
  }
  
function condicionesInciales() {
  asigarUnTextoElemnto("h1", "Secret Number Game!");
  asigarUnTextoElemnto("p", `Writte a number between 0 and ${numeroMaximo}`);
  numeroSecreto = generarUnNumeroSecreto();
  intentos = 1;
}
console.log(numerosSorteados)
function reiniciarJuego() {
  //limpiar la caja,
  limpiarCaja();
  // indicar mensaje de inicio, indicar los parámetros de numeros
  condicionesInciales();
  // generar el número aleatorio
  //inicializar el número de intentos
  // deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
  
}

condicionesInciales();
