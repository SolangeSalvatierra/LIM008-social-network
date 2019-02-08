import { addNoteOnSubmit, deleteNoteOnClick,cerrarSesionONClick} from "../view-controller.js";

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <span>
      <span>${objNote.title}</span>
    </span>
    <button id="btn-deleted-${objNote.id}">Eliminar
      </button>
  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return liElement;
}

export default (notes) => {
  console.log(notes)
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add note -->
    <form>
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
    </form>
    <!-- notes -->
    <section>
      <ul id="notes-list">
      </ul>
    </section>
    <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>
  `;

  divContainer.innerHTML = homeContent;
  const buttonAddNote = divContainer.querySelector('#btn-add-note');
  const ul = divContainer.querySelector('#notes-list');
  notes.forEach(note => {
    ul.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);

  const btnCerrarSesion = divContainer.querySelector('#btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click',cerrarSesionONClick);
   
  return divContainer;
}