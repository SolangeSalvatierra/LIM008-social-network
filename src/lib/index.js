export const ingresarCuenta = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
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
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
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

  export const verificar = () => {
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

  export const observador = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log ("existe usuario activo")
            aparecer(user);
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;
  
          console.log("**********");
          console.log(user.emailVerified)
          console.log("**********");
          
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log ("no existe usuario activo")
          // ...
        }
      });
  }
  observador();
  
  export const aparecer = (user) => {
    const users = user;
    const contenido = document.getElementById("contenido");
    if (users.emailVerified){ 
    contenido.innerHTML = `
        <p> Bienvenido! </p>
        <button onclick="cerrar()"> Cerrar Sesión </button>
        `;
    } 
  }
  
  export const cerrar = () => {
    firebase.auth().signOut()
    .then(() => {
        console.log("saliendo...")
    })
    .catch((error) => {
        console.log(error)
    })
  }


  export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log (error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }

  export const loginFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('publish_pages');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
     const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
  
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }

  //
  