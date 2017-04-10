var snake= document.getElementById("vibora");
var tablero= document.getElementById("tabla");
var posicionX=0;
var posicionY=0;
var desplazamiento=25;

document.addEventListener("keydown", mover);
botonReiniciar.addEventListener("click", reiniciar);

function mover(event) {
  switch (event.keyCode) {
    //el which funciona similar al keyCode, pero no corre en Explorer en versiones anteriores a la 9 
    case 39: //derecha
      posicionX= posicionX+ desplazamiento;
      if(posicionX> 475){
        perder()

      } else{
        vibora.style.marginLeft= posicionX + "px";
      }
      break;

    case 37: //izquierda
      posicionX= posicionX - desplazamiento;
      if( posicionX<0){
        perder();

      } else{
        vibora.style.marginLeft= posicionX + "px";
      }
        break;

    case 38: //arriba
      posicionY= posicionY - desplazamiento;
        if( posicionY<0){
          perder();

        } else{
          vibora.style.marginTop= posicionY + "px";
        }
          break;

    case 40: //abajo
          posicionY= posicionY + desplazamiento;
          if( posicionY > 475){
            perder();

          } else{
            vibora.style.marginTop= posicionY + "px";
          }
            break;
  }
}

function perder() {
  alert("PERDISTE");
  cancelarTeclas();
  reiniciar();
}

function cancelarTeclas() {
  document.removeEventListener("keydown", mover);
}

/*No sé porque no se ve mi boton de reiniciar en el body, pero para solucionar
el problema de que se reinicie invoco la funcion reiniciar dentro de la function
perder, asi cada que se pierde se reinicia el juego */
function reiniciar() {
  posicionX=0;
  posicionY=0;
  vibora.style.marginLeft=posicionX;
  vibora.style.marginTop=posicionY;
  document.addEventListener("keydown", mover);

/*Encontré al final el método location.reload() que me ahorra mi choro de
colocar la vivora de nuevo en las coordenadas 0 tanto en x como y, pero bueno*/
}
