// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests

import {registrar} from"../src/controller/controller-firebase.js";

describe('list de notas', () => {
  it('Debería poder crear cuenta', () => {
    return  registrar ('elexisfer.18@gmail.com','000000')
      .then((user) => {
       expect(user.email).toBe('elexisfer.18@gmail.com')
      })
  });
})
