// Este es el punto de entrada de tu aplicacion
import { initRouter } from "./router.js";

const init = () => {
  const config = {
    apiKey: "AIzaSyAq4Nw0xlHrJJlb-txohnMEkHZzxOpkxCk",
    authDomain: "usuarios-28a17.firebaseapp.com",
    databaseURL: "https://usuarios-28a17.firebaseio.com",
    projectId: "usuarios-28a17",
    storageBucket: "usuarios-28a17.appspot.com",
    messagingSenderId: "436355716999"
  };
  firebase.initializeApp(config);
  initRouter();
  


}

window.onload = init();

window.onload = init();