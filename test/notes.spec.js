
// import myMock from '../_mocks_/firebase-mock.js';
// global.firebase = myMock();
import MockFirebase from 'mock-cloud-firestore';

const  fixtureData  = {
    __colección__ : {
      post : {
        __doc__ : {
          abc1d  : {
            titulo :   'publicar post' 
          },
          abc125:{
            titulo: 'disfrutando del sol'
          }
        }
      }
    }
  }
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
// {isNaiveSanpshotListenerEnabed:true});

import{ addNote, getNotes, deleteNote } from '../src/controller/controller-firebase.js';




describe('lista de post', () => {
    it ('Deberia de poder agregar un post', (done) => { 
       return addNote ('publicar post')
       .then (() => getNotes(
        (data) => {   
            const result = data.find((post) =>  
            post.titulo === 'publicar post');

        expect (result.titulo).toBe ('publicar post');
        done ()
        }

       ))

    });
            
    it ('Deberia de poder eliminar una nota con el id:abc125',(done) => {
  return deleteNote ('abc125') 
   .then(() => getNotes (
       (data) => {
           const result = data.find ((post) => post.id === 'abc125');
           expect(result).tobe (undefined);
        done () 

    }
    ))
})
})