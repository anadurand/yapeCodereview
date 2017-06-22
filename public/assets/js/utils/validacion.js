"use strict";


const habilitarBtnCard = function(){
  if(state.creditCard && state.creditMonth && state.creditYear){
    $("#next").removeClass("disabled");
  }else{
    $("#next").addClass("disabled");
  }
}

const validarNumero = (e)=>{
  if(e.which< 47 && e.which>58){
    e.preventDefault();
  }
}
const validarLetra = (e)=>{
  if(e.which> 47 && e.which<58){
    e.preventDefault();
  }

}
