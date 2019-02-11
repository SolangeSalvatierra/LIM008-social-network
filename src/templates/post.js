import { addNoteOnSubmit, deleteNoteOnClick,cerrarSesionONClick, editionNoteOnClick, likeClick} from "../view-controller.js";

const itemNote = (objNote) => {
  const liElement = document.createElement('div');
  liElement.setAttribute("class", "contend-post");	

  liElement.innerHTML = `
    <div class="post-title" id ="${objNote.id}">
      <span id ="text-${objNote.id}" >${objNote.title}</span>
    </div>
    <div class="post-button">
      <hr>
      <img id="btn-like-${objNote.id}" alt="ico-heart" class="ico-heart" src="https://cdn141.picsart.com/271344092058211.png" />
      <span id="btn-count-${objNote.id}">${objNote.likePost}</span>
      <img id="btn-edition-${objNote.id}" alt="ico-edition" class="ico-edition" src="https://cdn.icon-icons.com/icons2/916/PNG/512/Edit_icon-icons.com_71853.png" />
      <span id="span-${objNote.id}">Editar</span>

      <img id="btn-deleted-${objNote.id}" alt="ico-heart" class="ico-delete" src="https://img2.freepng.es/20180613/tqx/kisspng-computer-icons-clip-art-delete-5b2111cc434902.7190528915288939002756.jpg" />

    </div>

  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
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
        <input id="input-new-note" placeholder = "Agrega post" ></input>
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