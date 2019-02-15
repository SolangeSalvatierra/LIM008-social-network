// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
// mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


import {registrar, verificar} from"../src/controller/controller-firebase.js";

describe('Registro', () => {
  it('Debería poder crear cuenta', () => {
    registrar ('alexisfer.18@gmail.com','000000')
    mockauth.flush();
    mockauth.getUserByEmail('alexisfer.18@gmail.com')
      .then((user) => {
       console.assert(user, 'se creó')
      })
  });      
})


