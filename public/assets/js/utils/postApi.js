"use strict";

const postRegisterCard = (cellphone, card, month, year, clave, updated)=> {

  $.post("api/registerCard", {phone: cellphone, cardNumber: card, cardMonth: month, cardYear: year, cardPassword: clave}, function(result){
    if(result.success){
      state.pagina = 7;
      updated();
    }else{
      $(".error").text(result.message);
    }
  });

}
