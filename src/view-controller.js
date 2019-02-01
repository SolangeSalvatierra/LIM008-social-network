import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook } from "./lib/index.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}

export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  acceder(email2, password2)
    .then(() => changeHash('/home'))
    .catch(() => {})
}
