"use strict";

const postRegisterNumber = (cellphone, termsChecked, updated) => {
    $.post("api/registerNumber", {phone: cellphone, terms: termsChecked}, function(result){
        if(result.success){
          console.log(result.success);
          state.pagina = 2;
          state.phoneNumber = result.data.phone;
          state.code = result.data.code;
          updated();
        }else{
          $(".error").text(result.message);
        }
    });
}

const postResendCode = (cellphone)=>{
    $.post("api/resendCode", {phone: cellphone}, function(result){
        if(result.success){
          console.log(result.data);
          state.code=result.data;
          $(".newCode").text("Ingrese en siguiente codigo:" + result.data);
        }else{
          $(".error").text(result.message);
        }
    });

}

const postCreateUser = (cellphone, user, mail, clave, updated)=> {

  $.post("api/createUser", {phone: cellphone, name: user, email: mail, password: clave }, function(result){
    if(result.success){
      state.pagina = 4;
      updated();
    }else{
      $(".error").text(result.message);
    }
  });

}

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
