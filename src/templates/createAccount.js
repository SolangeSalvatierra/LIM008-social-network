import {clickCrear} from "../view-controller.js";
//no es necesario poner el .js
// import {formIngresarCuenta} from "./login.js"

export const formCrearCuenta = () => {
    const contenidoForm = `
            <h4> Registro de usuarios </h4>
            <input id="email" type = "email" placeholder="Ingresa email">
            <!-- <input id="name" type = "name" placeholder="Nombre Completo"> 
            <input id="name-user" type = "name-user" placeholder="Nombre de Usuario"> -->
            <input id="password" type = "password" placeholder="Ingresa contraseña">
            <button type = "button" id="btn-crear"> Crear/Registrar </button>
            
    `;
    // const form = document.createElement('form');
    // form.setAttribute('id', 'login');
    const form = document.getElementById('newAccount');
    form.innerHTML = contenidoForm;
    // El querySelector hace en este caso la función del "document.getElementById"
    const btnAcceder = form.querySelector('#btn-crear');
    btnAcceder.addEventListener('click', clickCrear);
    

    return form;
}

{/* 
            <button type = "button" id="btn-crear"> Crear/Registrar con Google </button>
            <button type = "button" id="btn-crear"> Crear/Registrar con Facebook </button> */}