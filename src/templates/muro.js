import { clickCerrar } from "../view-controller.js";

export const formCrearMuro = () => {
    const contenidoForm = `
        <p> Bienvenido! </p>
        <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>
    `;
    const form = document.getElementById('muro');
    form.innerHTML = contenidoForm;

    const btnCerrarSesion = form.querySelector('#btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click', () => {
        clickCerrar();
        form.innerHTML='';
    });

    return form;
}