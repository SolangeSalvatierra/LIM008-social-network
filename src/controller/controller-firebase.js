// aqui exportaras las funciones que necesites

export const registrar = (email, password) => {
return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const acceder = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const observador = (user) => {
   return firebase.auth().onAuthStateChanged((user) => {
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
  const provider = new firebase.auth.GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    // console.log (error);
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
  return firebase.auth().signInWithPopup(provider).then(function(result) {
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

export const getNotes = (callback) =>
  firebase.firestore().collection('post')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 
    
export const addNote = (textNewNote) => {
    return firebase.firestore().collection('post').add({
      title: textNewNote,
      state: false,
      likePost: 0
    })
  }
  
export const deleteNote = (idNote) =>
    firebase.firestore().collection('post').doc(idNote).delete()

export const cerrar = () => 
   firebase.auth().signOut()
      
export const editionNote = (objNote) =>{	 
  document.getElementById(objNote.id).innerHTML=`
    <input id ="text2-${objNote.id}" ></input>
    
`
    const button = document.getElementById(`btn-edition-${objNote.id}`);	
    const spaGuardar = document.getElementById(`span-${objNote.id}`)
    spaGuardar.innerHTML= "Guardar";	
  //  const btnEdition = document.createElement("button");	
  //     btnEdition.setAttribute("id", "btn-edition");	
  //     document.getElementById("muro-post").appendChild(btnEdition);	
      
     button.addEventListener("click", () => {	
          const washingtonRef = firebase.firestore().collection("post").doc(objNote.id);	
          const newPost = document.getElementById(`text2-${objNote.id}`).value;	
          // Set the "capital" field of the city 'DC'	
          return washingtonRef.update({	
           title: newPost	
          })	
          .then(function() {	
            spaGuardar.innerHTML = 'Editar'
             console.log("Document successfully updated!");	      
           })	
          .catch(function(error) {	
          // The document probably doesn't exist.	
             console.error("Error updating document: ", error);	
          });	
     });	
}

export const likeCountShow = (idNote, objNote) => {
  const likeCount = objNote.likePost + 1;
  const washingtonRef = firebase.firestore().collection("post").doc(idNote);	
  document.getElementById(`btn-count-${objNote.id}`).value = likeCount;
  return washingtonRef.update({	
    likePost: likeCount
   })	
   .then(function() {	
      console.log("Document successfully updated!");	      
    })	
   .catch(function(error) {	
   // The document probably doesn't exist.	
      console.error("Error updating document: ", error);	
   });	

}