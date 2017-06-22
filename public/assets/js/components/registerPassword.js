"use strict";

const RegisterCardPassword = (updated)=> {
  const parent = $('<div class="initial-parent registerCard center-align"></div>');
  const icon = $('<img class="icono-question" src="assets/img/icons/question.png">')
  const divImg = $('<div class="center-align"></div>');
  const img = $('<img class="header-icon" src="assets/img/icons/bcp-logo.png">');
  const h4 = $('<h4 class="gris-dark title-h4 center-align">Ingresa la clave de tu tarjeta</h4>');
  const p = $('<p class="gris-letra title-p">Tarjeta <span class="negrita">****'+ state.creditCard.slice(-4) + '</span></p>');
  const divForm = $('<div class="div-input"></div>');
  const iconLock = $('<img src="assets/img/icons/lock.png" class="icono-password">');
  const input = $('<input type="password" maxlength="4" class="center-align morado" placeholder=".  .  .  ."equired>');
  const btnContinuar = $('<button id="next" class="btn disabled boton-amarillo">registrar</button>');
  const messageError =$('<p class="error rojo"></p>');


  divImg.append(img);
  divForm.append(iconLock);
  divForm.append(input);
  parent.append(icon);
  parent.append(divImg);
  parent.append(h4);
  parent.append(p);
  parent.append(divForm);
  parent.append(btnContinuar);
  parent.append(messageError);

  input.on({
    keypress: validarNumero,
    keyup: function(e){
              var regex = /^[0-9]+$/;
              if(regex.test($(this).val()) && $(this).val().length == 4){
                 state.creditPassword = $(this).val();
                 $("#next").removeClass("disabled");
               }else{
                 state.creditPassword = null;
                 $("#next").addClass("disabled");
               }
            }
  });

  btnContinuar.on("click", function(e){
    e.preventDefault();
    postRegisterCard(state.phoneNumber, state.creditCard, state.creditMonth, state.creditYear, state.creditPassword, updated);
  })
  return parent;
}
