import { addPostOnSubmit, deletePostOnSubmit, cerrarSesionONClick, editionPostOnClick, likeClick} from "../view-controller.js";

const itemPost = (objPost) => {
  const liElement = document.createElement('div');
  liElement.innerHTML = `
    <span>
      <textarea id ="text-${objPost.id}" >${objPost.title}</textarea>
    </span>
    <button id="btn-deleted-${objPost.id}">Eliminar</button>
    <button id="btn-edition-${objPost.id}">Editar</button>
    <button id="btn-like-${objPost.id}">Me gusta</button>
    <span id="btn-count-${objPost.id}">${objPost.likePost}</span>

  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objPost.id}`)
    .addEventListener('click', () => deletePostOnSubmit(objPost));
  liElement.querySelector(`#btn-edition-${objPost.id}`)	
    .addEventListener('click', () => editionPostOnClick(objPost));
  liElement.querySelector(`#btn-like-${objPost.id}`)	
    .addEventListener('click', () => likeClick(objPost));
  return liElement;
}

export default (posts) => {
  console.log(posts)
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add post -->
    <form>
      <div id ="muro-post">
        <textarea id="input-new-post" placeholder = "Agrega post" ></textarea>
      </div>
      <button id="btn-add-post">Publicar
      </button>
    </form>
    <!-- posts -->
    <section>
      <div id="posts-list">
      </div>
    </section>
    <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>
  `;

  divContainer.innerHTML = homeContent;
  const buttonAddPost = divContainer.querySelector('#btn-add-post');
  const ul = divContainer.querySelector('#posts-list');
  posts.forEach(post => {
    ul.appendChild(itemPost(post));
  });
  buttonAddPost.addEventListener('click', addPostOnSubmit);

  const btnCerrarSesion = divContainer.querySelector('#btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click',cerrarSesionONClick);
   
  return divContainer;
}