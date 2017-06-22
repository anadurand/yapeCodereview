"use strict";

const RegisterCard = (updated) => {

  const parent = $('<div class="initial-parent registerCard center-align"></div>');
  const icon = $('<img class="icono-question" src="assets/img/icons/question.png">')
  const divImg = $('<div class="center-align"></div>');
  const img = $('<img class="header-icon" src="assets/img/icons/bcp-logo.png">');
  const h4 = $('<h4 class="gris-dark title-h4 center-align">Registra tu tarjeta de débito BCP</h4>');
  const p = $('<p class="gris-letra title-p">Por ahora solo aceptamos cuentas de ahorro <br> y/o corriente en soles</p>');
  const divForm = $('<div class="div-input"></div>');
  const iconCard = $('<img src="assets/img/icons/card.png" class="icono-card">');
  const input = $('<input type="text" maxlength="16" class="center-align morado" required>');
  const escanear = $('<img src="assets/img/icons/scan.png" class="icono-escaner"><a href="#" class="turquesa"> Escaner tarjeta</a>');
  const divDate = $('<div class="div-date"><p class="left gris-letra title-p">Fecha de vencimiento</p></div>')
  const inputConteiner = $('<p class="right">/</p>');
  const inputMonth = $('<input type="text" maxlength="2" class="center-align morado input-month" placeholder="Mes" required>');
  const inputYear = $('<input type="text"  maxlength="2" class="center-align morado input-year" placeholder="Año" required>');
  const btnContinuar = $('<button id="next" class="btn disabled boton-amarillo">continuar</button>');

  divImg.append(img);
  divForm.append(iconCard);
  divForm.append(input);
  inputConteiner.prepend(inputMonth);
  inputConteiner.append(inputYear);
  divDate.append(inputConteiner);
  parent.append(icon);
  parent.append(divImg);
  parent.append(h4);
  parent.append(p);
  parent.append(divForm);
  parent.append(escanear);
  parent.append(divDate);
  parent.append(btnContinuar);

  var regex = /^[0-9]+$/;
  input.on({
    keypress: validarNumero,
    keyup: function(e){
            if(regex.test($(this).val()) && $(this).val().length == 16){
               state.creditCard = $(this).val();
             }else{ state.creditCard = null;}
             habilitarBtnCard();
           }
  });
  inputMonth.on({
    keypress: validarNumero,
    keyup: function(e){
            if(regex.test($(this).val()) && $(this).val().length <= 2 && $(this).val()>0 && $(this).val()<13 ){
               state.creditMonth = $(this).val();
             }else{ state.creditMonth = null;}
             habilitarBtnCard();
           }
  });
  inputYear.on({
    keypress: validarNumero,
    keyup: function(e){
              if(regex.test($(this).val()) && $(this).val().length <= 2 && $(this).val()>16 && $(this).val()< 25 ){
                 state.creditYear = $(this).val();
               }else{ state.creditYear = null;}
               habilitarBtnCard();
            }
  });


  btnContinuar.on("click", function(e){
    e.preventDefault();
    state.pagina = 6;
    updated();

  });

  return parent;

}
