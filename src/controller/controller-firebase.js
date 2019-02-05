export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)