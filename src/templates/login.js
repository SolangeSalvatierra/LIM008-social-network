import { signInOnSubmit } from "../view-controller.js";
import { acceder } from "../lib/index.js";

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
    form.classList.add('d-flex','justify-content-center','align-items-center','flex-direction-column','vh-100');
    form.innerHTML = formContent;
  
    // selecccionando elementos del DOM
    const btnSignIn = form.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', acceder);
    return form;
  }