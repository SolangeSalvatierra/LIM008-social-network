// import { clickCerrar,addNoteOnSubmit,deleteNoteOnClick } from "../view-controller.js";

// // export const formCrearMuro = () => {
//     // const contenidoForm = `
//     //     <p> Bienvenido! </p>
//     //     <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>
//     // `;

//     export const itemNote = (objNote) => {
//         const liElement = document.createElement('div');
//         liElement.innerHTML = `
//           <span>
//             <span>${objNote.title}</span>
//           </span>
//           <button id="btn-deleted-${objNote.id}">Eliminar
//             </button>
//         `;
//         // agregando evento de click al btn eliminar una nota
//         liElement.querySelector(`#btn-deleted-${objNote.id}`)
//           .addEventListener('click', () => deleteNoteOnClick(objNote));
//         return liElement;
//       }
//       export default (notes) => {
//         console.log(notes)
//         const divContainer = document.createElement('div');
//         const homeContent = `
//           <!-- form add note -->
//           <form>
//             <div>
//             <button type = "button" id = "btn-cerrar-sesion"> Cerrar Sesión </button>

//               <input type="text" id="input-new-note">
//               <label for="input-new-note">Agrega una nota...</label>
//             </div>
//             <button id="btn-add-note">
//             </button>
//             <div id="demo-snackbar-example">
//               <div></div>
//               <button type="button"></button>
//             </div>
//           </form>
//           <!-- notes -->
//           <section>
//             <div id="notes-list">
//             </div>
//           </section>
//         `;
//         divContainer.innerHTML = homeContent;
//         const buttonAddNote = divContainer.querySelector('#btn-add-note');
//         const div = divContainer.querySelector('#notes-list');
//         notes.forEach(note => {
//           div.appendChild(itemNote(note));
//         });
//         buttonAddNote.addEventListener('click', addNoteOnSubmit);
//         return divContainer;
//       }

//     // const form = document.getElementById('muro');
//     // form.innerHTML = itemNote;

//     // // const btnCerrarSesion = form.querySelector('#btn-cerrar-sesion');
//     // // btnCerrarSesion.addEventListener('click', () => {
//     // //     clickCerrar();
//     // //     form.innerHTML='';
//     // });