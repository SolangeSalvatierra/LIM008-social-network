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

  //
  const verificar = () => {
    let user = firebase.auth().currentUser;
  
    if (user) {
    user.sendEmailVerification().then(() => {
    // Email sent.
    console.log("enviando correo...");  
    }).catch((error) => {
  // An error happened.
  console.log(error);
    });
    }
  }