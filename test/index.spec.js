// importamos la funcion que vamos a testear
//import { myFunction } from "../src/lib/index";

//describe('myFunction', () => {
  //it('debería ser una función', () => {
  //  expect(typeof myFunction).toBe('function');
 // });
//});

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

import { registrar } from "../src/controller/controller-firebase.js";

describe('correo electronico', () => {
  it('Debería poder iniciar sesion', () => {
    return registrar('front@end.la', '123456')
      .then((user) => {
        expect(user.email).toBe('front@end.la')
      })
  });
})

