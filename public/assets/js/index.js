"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.pagina) {
    case null:
                wrapper.append(Welcome(updated));
      break;
    case 1:
                wrapper.append(RegisterNumber(updated));
      break;
    case 2:
                wrapper.append(RegisterCode(updated));
      break;
    case 3:
                wrapper.append(CrearUsuario(updated));
      break;
    case 4:
                wrapper.append(AcountSuccess(updated));
      break;
    case 5:
                wrapper.append(RegisterCard(updated));
      break;
    case 6:
                wrapper.append(RegisterCardPassword(updated));
      break;
    case 7:
                wrapper.append(FinalState(updated));
      break;
}

  root.append(wrapper);

}

const updated = function(){
  render(root);
}
const state = {
  pagina: 5,
  termsChecked: false,
  phoneChecked: false,
  phoneNumber: "123456543",
}


$( _ => {

  const root = $(".root");
  render(root);

});
