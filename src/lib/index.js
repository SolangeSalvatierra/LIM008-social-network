export const ingresarCuenta = () => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
      // ...
    });
  }
  
  export const crearCuenta = () => {  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() =>{
    verificar()
  })
  .catch((error) => {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  console.log(error.code);
  console.log(error.message);
  // ...
  });
  }