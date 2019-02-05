import {ingresarCuenta, crearCuenta, cerrar, aparecer,verificar,addNote,deleteNote} from "./controller/controller-firebase.js";
import { formCrearMuro } from "./templates/muro.js";

const changeHash = (hash) => {
  location.hash = hash;
}

  export const clickCrear = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    alert('probando si funciona el click crear');
    crearCuenta(email, password)
    .then(() => changeHash('/muro'))
    .catch(() => {})
    verificar() 
}

export const clickAcceder = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  alert('probando si funciona el click acceder');
  ingresarCuenta(email, password)
    .then(() => changeHash('/muro'))
    .catch(() => {})
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

