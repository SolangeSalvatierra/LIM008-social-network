
import myMock from '../_mocks_/firebase-mock.js'
global.firebase = myMock();

import{ addNote } from '../src/controller/controller-firebase.js';




describe('addNote', () => {
    it ('Deberia de poder agregar un post', () =>{ 
       return addNote ('como estas').then (() => {
           expect (data).tobe ('como estas');
            
       })
    })
})