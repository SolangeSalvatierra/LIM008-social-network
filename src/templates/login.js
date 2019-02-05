import {clickAcceder, mostrarMuro} from "../view-controller.js";
import { loginGoogle, loginFacebook } from "../controller/controller-firebase.js";
//solo para probar que pase de un form a otro, ya que aun no uso el router
import {formCrearCuenta} from "../templates/createAccount.js";
//import {formCrearMuro} from "../templates/muro.js";

export const formIngresarCuenta = () => {
    const contenidoForm = `
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


     // <button class="button to login" type = "button" id="btn-google">Ingresa con google</button>
            // <button class="button to login" type = "button" id="btn-facebook">Ingresa con faceboock</button>




    // const form = document.createElement('form');
    // form.setAttribute('id', 'login');
    const form = document.getElementById('login');
    form.innerHTML = contenidoForm;
    // El querySelector hace en este caso la función del "document.getElementById"
    const btnAcceder = form.querySelector('#btn-acceder')
    // btnAcceder.addEventListener('click', clickAcceder);
    btnAcceder.addEventListener('click', () => {
        clickAcceder();
        mostrarMuro();
    });

    const btnGoogle = form.querySelector('#auth-google');
    btnGoogle.addEventListener('click', loginGoogle);

    const btnFacebook = form.querySelector('#auth-fb');
    btnFacebook.addEventListener('click', loginFacebook);

    const btnRegistrarse = form.querySelector('#btn-registrarse');
    btnRegistrarse.addEventListener('click', () => {
        formCrearCuenta();
        form.innerHTML = '';
    } );
    return form;
}
