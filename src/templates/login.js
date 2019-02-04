import { signInOnSubmit } from "../view-controller.js";

export default () => {
  const form = document.createElement('form');
  const formContent = `
  <h4> Ingreso de usuarios </h4>
  <input id="email2" type = "email" placeholder="Ingresa email">
  <input id="password2" type = "password" placeholder="Ingresa contraseña">
  <button type = "button" id="btn-acceder"> Acceder </button>
  
  <button id="btn-google">Ingresa con google</button>
  <button id="btn-Facebook">Ingresa con faceboock</button>
  
  <div id= "contenido">
  
  </div>
  `;
  form.innerHTML = formContent;

  // selecccionando elementos del DOM
  const btnSignIn = form.querySelector('#btn-acceder');
  btnSignIn.addEventListener('click', signInOnSubmit);
  return form;
}