import {ingresarCuenta, crearCuenta} from "./lib/index.js";

export const clickAcceder = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    alert('probando si funciona el click acceder');
    ingresarCuenta(email, password);
    //   .then(() => changeHash('/home'))
    //   .catch(() => {})
  }

  export const clickCrear = () => {
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value;
    alert('probando si funciona el click crear');
    crearCuenta(email, password);

  }