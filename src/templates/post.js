import { addNoteOnSubmit, deleteNoteOnClick, editionNoteOnClick } from "../view-controller.js";

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <span>
      <span>${objNote.title}</span>
    </span>
    <button id="btn-deleted-${objNote.id}">Eliminar
    <button id="btn-edition-${objNote.id}">Editar
      </button>
  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));

    liElement.querySelector(`#btn-edition-${objNote.id}`)
    .addEventListener('click', () => editionNoteOnClick(objNote));
  return liElement;
}

export default (notes) => {
  console.log(notes)
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add note -->
    <form>
      <div id = "muro-post">
        <input type="text" id="input-new-note">
        <label for="input-new-note">Agrega una nota...</label>
      </div>
      <button id="btn-add-note">Guardar
      </button>
    </form>
    <!-- notes -->
    <section>
      <ul id="notes-list">
      </ul>
    </section>
  `;
  divContainer.innerHTML = homeContent;
  const buttonAddNote = divContainer.querySelector('#btn-add-note');
  const ul = divContainer.querySelector('#notes-list');
  notes.forEach(note => {
    ul.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return divContainer;
}