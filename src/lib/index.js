// aqui exportaras las funciones que necesites

export const registrar = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  /*var nameuser = document.getElementById("name-user").value;
  var name = document.getElementById("name").value;
  var nameuser = document.getElementById("name-user").value;
  */   

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

export const acceder = () => {
  const email = document.getElementById("email2").value;
  const password = document.getElementById("password2").value;

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
export const loginGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
