import { registrar, acceder, observador, aparecer, cerrar, verificar, loginGoogle, loginFacebook, addPost, deletePostOnClick, editionPost, likeCountShow } from './controller/controller-firebase.js';

export const changeHash = (hash) => {
  location.hash = hash;
}

export const signInOnSubmitCreate = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  let ok = 0;
  //validando que los campos de email y password no esten vacíos 
  if(email !== '' && password !== ''){
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
      if(password.length>=6 && password.length<=10){
      //Probando lo de la verificación de correo electrónico
      registrar(email, password)
      .then(() => {
        verificar()          
        changeHash('/login')          
      })
      .catch(() => {})
      }else {
        alert('la contraseña debe contener un mínimo de 6 caracteres')
      }         

    }else{
      alert('Debe ingresar un email valido');
    } 

  }else{
    alert('debe completar los campos requeridos');
  }     
}

export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  let ok = 0;
  if(email !== '' && password !== ''){
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
      if(password.length>=6 && password.length<=10){
        acceder(email, password)
        .then(() => changeHash('/post'))
        .catch(() => { })
      }else{
        alert('su contraseña es incorrecta, debe contener un mínimo de 6 caracteres')
      }  
      
    }else{
      alert('Debe ingresar un email valido');
    }
  }else {
    alert('debe completar los campos requeridos');
  }
 
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
  const input = document.getElementById('new-post');
  const privacityValue = document.getElementById("select-privacity");

  addPost(input.value, privacityValue.value)
    .then(() => {
      
    }).catch(() => {
    
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
 editionPost(objPost) 

export const likeClick = (objPost) =>
  likeCountShow(objPost.id, objPost)