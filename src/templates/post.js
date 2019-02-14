import { addPostOnSubmit, deletePostOnSubmit, cerrarSesionONClick, editionPostOnClick, likeClick} from "../view-controller.js";

const itemPost = (objPost) => {
  const liElement = document.createElement('div');
  liElement.setAttribute("class", "contend-post");	

  liElement.innerHTML = `
    <div class="post-title" id ="${objPost.id}">
      <textarea class = "textarea" id ="text-${objPost.id}" >${objPost.title}</textarea>
    </div>
    <div class="post-button">
      <hr>
      <img id="btn-like-${objPost.id}" alt="ico-heart" class="icon" src="https://cdn141.picsart.com/271344092058211.png" />
      <span id="btn-count-${objPost.id}">${objPost.likePost}</span>
      <img id="btn-edition-${objPost.id}" alt="ico-edition" class="icon" src=https://cdn.icon-icons.com/icons2/916/PNG/512/Edit_icon-icons.com_71853.png />
      <span id="span-${objPost.id}">Editar</span>

      <img id="btn-deleted-${objPost.id}" alt="ico-heart" class="icon" src="https://img2.freepng.es/20180613/tqx/kisspng-computer-icons-clip-art-delete-5b2111cc434902.7190528915288939002756.jpg" />

    </div>

  `;
  // document.getElementById(`text-${objPost.id}`).disabled = true;
  liElement.querySelector(`#text-${objPost.id}`).disabled = true;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objPost.id}`)
    .addEventListener('click', () => deletePostOnSubmit(objPost));

  // liElement.querySelector(`#btn-edition-${objPost.id}`)	
  //   .addEventListener('click', () => editionPostOnClick(objPost));

liElement.querySelector(`#btn-edition-${objPost.id}`)
    .addEventListener('click', () => {
      document.getElementById(`text-${objPost.id}`).disabled = false;
      const guardar = document.getElementById(`btn-edition-${objPost.id}`);	
      const spaGuardar = document.getElementById(`span-${objPost.id}`)
      spaGuardar.innerHTML= "Guardar";	

      guardar.addEventListener("click", () => editionPostOnClick(objPost));
    })



  liElement.querySelector(`#btn-like-${objPost.id}`)	
    .addEventListener('click', () => likeClick(objPost));
  return liElement;
}


export default (posts) => {
  const divContainer = document.createElement('div');
  const homeContent = `
    <!-- form add post -->
    <nav class='menu'>
    <a href='#/post'> <img id="img-logo" alt="img-logo" class="logo" src="ima/traveller.1.png" >    
    <a href='#' id = "btn-cerrar-sesion"> Cerrar Sesión </a>
    </nav>

    <div   class="contenedor">
    <a class = "contenedor-home">
    
    <form>
      <div id ="muro-post">
        <input id="new-post" placeholder = "Agrega post" ></input>
      </div>
      <button id="btn-add-post"> Compartir
      </button>
    </form>

    <!-- posts -->
    <section>
      <div id="posts-list">
      </div>
    </section>

    <footer class= "footer"> 
    </footer>
    
  `;

  divContainer.innerHTML = homeContent;
  const buttonAddPost = divContainer.querySelector('#btn-add-post');
  const div = divContainer.querySelector('#posts-list');
  posts.forEach(post => {
    div.appendChild(itemPost(post));
  });
  buttonAddPost.addEventListener('click', addPostOnSubmit);

  const btnCerrarSesion = divContainer.querySelector('#btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click',cerrarSesionONClick);
   
  return divContainer;
}