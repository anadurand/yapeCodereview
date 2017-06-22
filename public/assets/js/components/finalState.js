"use strict";

const FinalState = (updated)=> {

  const parent = $('<div class="container-fluid final morado-dark"></div>');
  const divArriba = $('<div class="morado-light center-align div-arriba"><img src="assets/img/icons/engine.png" class="icono-engine"><img src="assets/img/icons/happy-face.png" class="icono-happy-face"><h5 class="white-text">Hola</h5><div class="div-eye"><img src="assets/img/icons/eye.png" class="icono-eye"><a href="#" class="turquesa">Mostrar Saldo</a></div></div>');
  const divAbajo = $('<div class="morado-dark"></div>');
  const divHeader = $('<div class="final-abajo-header"><h5 class="white-text">últimos movimientos</h5><a href="#"><img src="assets/img/icons/right-arrow-circular-button.png" class=""></a>');
  const divBody = $('<div class="final-abajo-body row"><div class="col s4"><img src="assets/img/icons/icon.png" class=""></div><div class="col s8"><h5 class="">¿Aún no realizas tu primer <br> pago?</h5><p class="">Es rápido y sencillo</p></div></div>');
  const divFooter = $('<div class="final-abajo-footer"><div class="center-align white-text"><img src="assets/img/icons/send.png" class="icono-send"><p>enviar pago</p></div><div class="center-align white-text"><img src="assets/img/icons/code-qr.png" class="icono-code"><p>recibir pago</p></div></div>')

  divAbajo.append(divHeader);
  divAbajo.append(divBody);
  divAbajo.append(divFooter);
  parent.append(divArriba);
  parent.append(divAbajo);

  return parent;

}
