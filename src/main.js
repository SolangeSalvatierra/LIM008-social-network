import {formIngresarCuenta} from "./templates/login.js";

const init = () => {
    //alert('probando si funciona en función init')
    formIngresarCuenta();
}

// window.onload = init();
window.addEventListener('load', init)