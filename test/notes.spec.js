import MockFirebase from 'mock-cloud-firestore';


const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        gsa123: {
          title: 'probando agregar un post',
          complete: false
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {addPost, getPosts, deletePostOnClick, editionPost} from '../src/controller/controller-firebase.js'

describe('muro', () => {
  it('Debería porder agregar un post', (done) => {
    return addPost('probando agregar un post')
      .then(() => getPosts(
        (data) => {
          const result = data.find((post) => post.title === 'probando agregar un post');
          expect(result.title).toBe('probando agregar un post');
          done()
        }
      ))
  });
  it('Debería poder eliminar un post', (done) => {
    return deletePostOnClick('gsa123')
      .then(() => getPosts(
        (data) => {
          const result = data.find((post) => post.id === 'gsa123');
          expect(result).toBe(undefined);
          done()
        }
      ))
  });
  it('Debería poder editar un post', (done) => {
    return editionPost('gsa123')
    .then(() => getPosts(
      (data) => {
        const result = data.find((post) => post.title === 'probando agregar un post');
        expect(result.title).toBe('nota modificada')
        done()
      }
    ))
  });
});
