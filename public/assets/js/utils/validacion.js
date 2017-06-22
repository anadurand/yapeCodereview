"use strict";

const habilitarBoton = function(){
  if(state.phoneNumber && state.termsChecked){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}

const habilitarBtnCrearCuenta = function(){
  if(state.userName && state.userEmail && state.userPassword){
    $("#newAcount").removeClass("disabled");
  }else{
    $("#newAcount").addClass("disabled");
  }
}

const habilitarBtnCard = function(){
  if(state.creditCard && state.creditMonth && state.creditYear){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}

const validarNumero = (e)=>{
  if(e.which< 47 || e.which>58){
    e.preventDefault();
  }
}
const validarLetra = (e)=>{
  if(e.which> 47 && e.which<58){  
    e.preventDefault();
  }

}
