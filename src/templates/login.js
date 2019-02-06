import { signInOnSubmit, signInOnSubmitGoogle, signInOnSubmitFacebook, signInOnSubmitCreate } from "../view-controller.js";

export default () => {
  const form = document.createElement('form');
  const formContent = `
  <div   class="incia-sección">
  <h4> Inicia Sección  </h4>
  <input  class="text field" id="email" type = "email" placeholder="Ingresa email">
  <input  class="text field" id="password" type = "password" placeholder="Ingresa contraseña">
  <button class="login" type = "button" id="btn-acceder"> Iniciar Sección </button>
  <div>
      <label> O ingresa a través de:</label>
      <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
      <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
  </div>
  <button class="button" type= "button" id = "btn-registrarse">Registrarse</button>
  </div>
`;
  form.innerHTML = formContent;

  // selecccionando elementos del DOM
  const btnSignIn = form.querySelector('#btn-acceder');
  btnSignIn.addEventListener('click', signInOnSubmit);

  const btnGoogle = form.querySelector('#auth-google');
  btnGoogle.addEventListener('click', signInOnSubmitGoogle);

  const btnFacebook = form.querySelector('#auth-fb');
  btnFacebook.addEventListener('click', signInOnSubmitFacebook);

  const btnRegistrar = form.querySelector('#btn-registrarse');
  btnRegistrar.addEventListener('click', signInOnSubmitCreate);
  return form;

}