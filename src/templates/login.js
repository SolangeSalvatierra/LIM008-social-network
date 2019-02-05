import {clickAcceder, mostrarMuro} from "../view-controller.js";
import { loginGoogle, loginFacebook } from "../lib/index.js";
//solo para probar que pase de un form a otro, ya que aun no uso el router
import {formCrearCuenta} from "../templates/createAccount.js";
//import {formCrearMuro} from "../templates/muro.js";

export const formIngresarCuenta = () => {
    const contenidoForm = `
            <h4> Ingreso de usuarios </h4>
            <input id="email" type = "email" placeholder="Ingresa email">
            <input id="password" type = "password" placeholder="Ingresa contraseña">
            <button type = "button" id="btn-acceder"> Acceder </button>

            <button type = "button" id="btn-google">Ingresa con google</button>
            <button type = "button" id="btn-facebook">Ingresa con faceboock</button>
            <button type= "button" id = "btn-registrarse">Registrarse</button>

    `;
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

    const btnGoogle = form.querySelector('#btn-google');
    btnGoogle.addEventListener('click', loginGoogle);

    const btnFacebook = form.querySelector('#btn-facebook');
    btnFacebook.addEventListener('click', loginFacebook);

    const btnRegistrarse = form.querySelector('#btn-registrarse');
    btnRegistrarse.addEventListener('click', () => {
        formCrearCuenta();
        form.innerHTML = '';
    } );
    return form;
}
