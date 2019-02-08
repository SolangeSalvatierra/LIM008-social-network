<<<<<<< HEAD
import { addNoteOnSubmit, deleteNoteOnClick, editionNoteOnClick } from "../view-controller.js";
=======
import { addNoteOnSubmit, deleteNoteOnClick,cerrarSesionONClick} from "../view-controller.js";
>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <span>
      <span>${objNote.title}</span>
    </span>
    <button id="btn-deleted-${objNote.id}">Eliminar
<<<<<<< HEAD
    <button id="btn-edition-${objNote.id}">Editar
=======
>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b
      </button>
  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
<<<<<<< HEAD

    liElement.querySelector(`#btn-edition-${objNote.id}`)
    .addEventListener('click', () => editionNoteOnClick(objNote));
=======
>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b
  return liElement;
}

export default (notes) => {
  console.log(notes)
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add note -->
    <form>
<<<<<<< HEAD
      <div id = "muro-post">
        <input type="text" id="input-new-note">
        <label for="input-new-note">Agrega una nota...</label>
      </div>
      <button id="btn-add-note">Guardar
      </button>
=======
      <div>
        <input type="text" id="input-new-note">
        <label for="input-new-note"> Agrega una nota...</label>
      </div>
      <button id="btn-add-note">
      </button>
      <div id="demo-snackbar-example">
        <div></div>
        <button type="button"></button>
      </div>
>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b
    </form>
    <!-- notes -->
    <section>
      <ul id="notes-list">
      </ul>
    </section>
<<<<<<< HEAD
  `;
=======
    <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>
  `;

>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b
  divContainer.innerHTML = homeContent;
  const buttonAddNote = divContainer.querySelector('#btn-add-note');
  const ul = divContainer.querySelector('#notes-list');
  notes.forEach(note => {
    ul.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
<<<<<<< HEAD
=======

  const btnCerrarSesion = divContainer.querySelector('#btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click',cerrarSesionONClick);
   
>>>>>>> acc6d5a2eaba49eb02db3aca02f3c327ccd8f27b
  return divContainer;
}