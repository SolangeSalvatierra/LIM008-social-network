import {ingresarCuenta, crearCuenta, cerrar, aparecer} from "./lib/index.js";
import { formCrearMuro } from "./templates/muro.js";

export const clickAcceder = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    alert('probando si funciona el click acceder');
    ingresarCuenta(email, password)
      .then(() => changeHash('/home'))
      .catch(() => {})
  }

  export const clickCrear = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    alert('probando si funciona el click crear');
    crearCuenta(email, password);
  }

  export const clickCerrar = () => {
    cerrar();
  }

  export const mostrarMuro = () => {
    if(aparecer){
      formCrearMuro();
    }else {
      alert("incorrecto");
    }
  }