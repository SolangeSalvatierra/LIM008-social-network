export const registrar = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  
  export const acceder = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
  }
  
  export const verificar = () => {
   let user = firebase.auth().currentUser;
  
   if (user) {
   user.sendEmailVerification().then(() => {
   // Email sent.
   alert('se envió un correo de confirmación')
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
  
   }).catch(function(error) {
  
     const errorCode = error.code;
     const errorMessage = error.message;
      // The email of the user's account used.
     const email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     const credential = error.credential;
     // ...
   });
  }
  
  export const getPosts = (callback) =>{
   firebase.firestore().collection('post')
     .onSnapshot((querySnapshot) => {
       const data = [];
       querySnapshot.forEach((doc) => {
         data.push({ id: doc.id, ...doc.data() })
       });
       callback(data);
     });
  }
  
  export const getPostsByPrivacity = (privacityValue, callback) =>{
   firebase.firestore().collection('post').where('privacity', '==', privacityValue)
     .onSnapshot((querySnapshot) => {
       const data = [];
       querySnapshot.forEach((doc) => {
         data.push({ id: doc.id, ...doc.data() })
       });
       callback(data);
     });
  }
  
  export const addPost = (textNewPost, privacityValue) => {
     return firebase.firestore().collection('post').add({
       likePost: 0,
       title: textNewPost,
       state: false,
       privacity: privacityValue
     })
   }
  
  export const deletePostOnClick = (idPost) => {
   return firebase.firestore().collection('post').doc(idPost).delete()
  }
  
  export const cerrar = () =>
    firebase.auth().signOut()
  
  
  
  export const editionPost = (idPost, newPost) => {
     return firebase.firestore().collection('post').doc(idPost).update({
     title: newPost
     });
  }
  
  
  export const likeCountShow = (idPost, newLike) => {
   return firebase.firestore().collection('post').doc(idPost).update({
     likePost: newLike
     });
  }