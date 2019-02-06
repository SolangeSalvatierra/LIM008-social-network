import {ingresarCuenta, crearCuenta, cerrar, aparecer,verificar,addNote,deleteNote} from "./controller/controller-firebase.js";
import muro from "./templates/muro.js";

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
      muro();
    }else {
      alert("incorrecto");
    }
  }

  export const addNoteOnSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('input-new-note');
   
    addNote(input.value)
      .then(() => {
        input.value = '';
        data.message = 'Nota agregada'
      }).catch(() => {
        input.value = '';
        data.message = 'Lo sentimos, no se pudo agregar la nota';
      });
}

export const deleteNoteOnClick = (objNote) =>
  deleteNote(objNote.id)

