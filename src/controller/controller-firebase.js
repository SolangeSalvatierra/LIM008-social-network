export const clickAcceder = (email, password) =>
  firebase.auth().clickAccederWithEmailAndPassword(email, password);