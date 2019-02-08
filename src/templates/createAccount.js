import {signInOnSubmitCreate} from "../view-controller.js";
//no es necesario poner el .js
// import {formIngresarCuenta} from "./login.js"

export  default () => {
    const form = document.createElement('form');
    const  contenidoForm  =  `
    <div class='resgister'>
            <h4> Registro de usuarios </h4>
            <input id = "email" type = "email" placeholder = "Correo">
            <input id = "password" type = "password" placeholder = "Contraseña">
            <button type = "button" id = "btn-crear"> Registrate </button>
    </div>
    `;
    // const form = document.createElement('form');
    // form.setAttribute('id', 'login');
    form.innerHTML = contenidoForm;
    // El querySelector hace en este caso la función del "document.getElementById"
    const btnAcceder = form.querySelector('#btn-crear');
    btnAcceder.addEventListener('click', signInOnSubmitCreate);
    return form;
}