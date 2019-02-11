import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook, addNote, deleteNoteOnClick, editionNote, likeCountShow} from './controller/controller-firebase.js';

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

export const deleteNoteOnSubmit = (objNote) =>{
  if(confirm('¿Está seguro que quiere eliminar este post?')){
    deleteNoteOnClick(objNote.id);    
  }  
}
  



export const cerrarSesionONClick = () => {
  cerrar()
  .then(() => changeHash(''))
  .catch(err => console.log('Error logout', err));
}

export const editionNoteOnClick = (objNote) =>	
 editionNote(objNote.id, objNote.title) 

export const likeClick = (objNote) => 
  likeCountShow (objNote.id, objNote)