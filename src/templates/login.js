import { signInOnSubmit, signInOnSubmitGoogle, signInOnSubmitFacebook,changeHash  } from "../view-controller.js";

export default () => {
  const form = document.createElement('form');
  const formContent = `
  <div   class="conteiner">
  <img src="ima/traveller.1.png" class="img-logo">
  <h2> Inicia Sección  </h2>

  <input  class="text-field" id="email" type = "email" placeholder="usuario *">
  <input  class="text-field" id="password" type = "password" placeholder="contraseña *">
  <button class="login" type = "button" id="btn-acceder"> Iniciar Sección </button>
  <div>
      <label> O ingresa a través de:</label>
  </div>
  <div>
      <img id="auth-fb" alt="ico-fb" class="ico-fb" src="https://i.ibb.co/NmxyWjL/ico-fb.png" />
      <img id="auth-google" alt="ico-google" class="ico-google" src="https://i.ibb.co/xgLXQrr/ico-gg.png" />
  </div>
  <button class="button" type= "button" id = "btn-registrarse">Registrate</button>
  </div>
`;
  form.innerHTML = formContent;

   // Inicia sesión con Correo y contraseña
  const btnSignIn = form.querySelector('#btn-acceder');
  btnSignIn.addEventListener('click', signInOnSubmit);
// Inicia sesion con cuenta Google
  const btnGoogle = form.querySelector('#auth-google');
  btnGoogle.addEventListener('click', signInOnSubmitGoogle);
// Inicia sesion con cuenta Facebook
  const btnFacebook = form.querySelector('#auth-fb');
  btnFacebook.addEventListener('click', signInOnSubmitFacebook);

  const btnRegistrar = form.querySelector('#btn-registrarse');
  btnRegistrar.addEventListener('click' ,() => {
    changeHash  ('/create')
  });
  
  return form;

}