import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook, addNote, deleteNote, editionNote, likeCountShow} from './controller/controller-firebase.js';

export const changeHash = (hash) =>  {
    location.hash = hash;
  }

  export const signInOnSubmitCreate = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    registrar(email, password)
      .then(() => changeHash('/post'))
      .catch(() => {})
  }

export const signInOnSubmit = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    acceder(email, password)
      .then(() => changeHash('/post'))
      .catch(() => {})
}

export const signInOnSubmitGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/post'))
    .catch(() => {})
}

export const signInOnSubmitFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/post'))
    .catch(() => {})
}
export const addNoteOnSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('input-new-note');
   
    addNote(input.value)
      .then(() => {
        // input.value = '';
        // data.message = 'Nota agregada'
      }).catch(() => {
        // input.value = '';
        // data.message = 'Lo sentimos, no se pudo agregar la nota';
      });
}

export const deleteNoteOnClick = (objNote) =>
  deleteNote(objNote.id)


export const cerrarSesionONClick = () => {
  cerrar()
  .then(() => changeHash(''))
  .catch(err => console.log('Error logout', err));
}

export const editionNoteOnClick = (objNote) =>	
 editionNote(objNote) 

export const likeClick = (objNote) => 
  likeCountShow (objNote.id, objNote)