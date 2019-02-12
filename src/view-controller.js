import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook, addPost, deletePostOnClick, editionPost, likeCountShow } from './controller/controller-firebase.js';

export const changeHash = (hash) => {
  location.hash = hash;
}

export const signInOnSubmitCreate = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  let ok = 0;
  for(let i=0 ; i<email.length ; i++){
    if(email[i].charCodeAt() === 64){         
      for(let j=i ; j<email.length ; j++){
        if(email[j].charCodeAt() === 46){ 
          ok=1;          
        }       
      }  
    }
  }
  if(ok===1){
    //Probando lo de la validación de correo electrónico
  registrar(email, password)
  .then(() => {
    verificar()          
    changeHash('/login')          
  })
  .catch(() => {})    
  }else{
    alert('Debe ingresar un email valido');
  }    
}

export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  acceder(email, password)
    .then(() => changeHash('/post'))
    .catch(() => { })
}

export const signInOnSubmitGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/post'))
    .catch(() => { })
}

export const signInOnSubmitFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/post'))
    .catch(() => { })
}
export const addPostOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input-new-post');

  addPost(input.value)
    .then(() => {
      // input.value = '';
      // data.message = 'Nota agregada'
    }).catch(() => {
      // input.value = '';
      // data.message = 'Lo sentimos, no se pudo agregar el post';
    });
}

export const deletePostOnSubmit = (objPost) => {
  if (confirm('¿Está seguro que quiere eliminar este post?')) {
    deletePostOnClick(objPost.id);
  }
}



export const cerrarSesionONClick = () => {
  cerrar()
    .then(() => changeHash(''))
    .catch(err => console.log('Error logout', err));
}

export const editionPostOnClick = (objPost) =>
  editionPost(objPost.id, objPost.title)

export const likeClick = (objPost) =>
  likeCountShow(objPost.id, objPost)