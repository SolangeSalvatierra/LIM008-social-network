import { addNoteOnSubmit, deleteNoteOnSubmit,cerrarSesionONClick, editionNoteOnClick, likeClick} from "../view-controller.js";

const itemNote = (objNote) => {
  const liElement = document.createElement('div');
  liElement.innerHTML = `
    <span>
      <textarea id ="text-${objNote.id}" >${objNote.title}</textarea>
    </span>
    <button id="btn-deleted-${objNote.id}">Eliminar</button>
    <button id="btn-edition-${objNote.id}">Editar</button>
    <button id="btn-like-${objNote.id}">Me gusta</button>
    <span id="btn-count-${objNote.id}">${objNote.likePost}</span>

  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnSubmit(objNote));
  liElement.querySelector(`#btn-edition-${objNote.id}`)	
    .addEventListener('click', () => editionNoteOnClick(objNote));
  liElement.querySelector(`#btn-like-${objNote.id}`)	
    .addEventListener('click', () => likeClick(objNote));
  return liElement;
}

export default (notes) => {
  console.log(notes)
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add note -->
    <form>
      <div id ="muro-post">
        <textarea id="input-new-note" placeholder = "Agrega post" ></textarea>
      </div>
      <button id="btn-add-note">Publicar
      </button>
    </form>
    <!-- notes -->
    <section>
      <div id="notes-list">
      </div>
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