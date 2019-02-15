import MockFirebase from 'mock-cloud-firestore';


const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        gsa123: {
          likePost: 1,
          email: 'alexisfer.18@gmail.com',
          title: 'probando agregar un post',
          complete: false,
          privacity: 'public'
        },
        gsa121: {
          likePost: 1,
          email: 'alexisfer.18@gmail.com',
          title: 'probando agregar un post',
          complete: false,
          privacity: 'private'
        },
        gsa122: {
          likePost: 1,
          email: 'alexisfer.18@gmail.com',
          title: 'probando agregar un post',
          complete: false,
          privacity: 'private'
        },
        gsa124: {
          likePost: 1,
          email: 'alexisfer.18@gmail.com',
          title: 'probando agregar un post',
          complete: false,
          privacity: 'public'
        },
        gsa125: {
          likePost: 1,
          email: 'alexisfer.18@gmail.com',
          title: 'probando agregar un post',
          complete: false,
          privacity: 'private'
        }
      }
    }
  }
}


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {addPost, getPosts, deletePostOnClick, editionPost, likeCountShow, getPostsByPrivacity} from '../src/controller/controller-firebase.js'

describe('muro', () => {
  it('Debería porder agregar un post', (done) => {
    return addPost('probando agregar un post', 'public')
      .then(() => getPosts(
        (data) => {
          const result = data.find((note) => note.title === 'probando agregar un post');
          expect(result.title).toBe('probando agregar un post');
          done()
        }
      ))
  });
  it('Debería poder editar un post', (done) => {
    return editionPost('gsa123','Post modificado')
      .then(() => getPosts((data) => {
          const result = data.find((post) => post.title === 'Post modificado');
          expect(result.title).toBe('Post modificado');
          done();
        }
      ))
  });
  it('Debería dar un like', (done) => {
    return likeCountShow('gsa123', '1')
    .then(() => getPosts(
      (data) => {
        const result = data.find((post) => post.likePost === '1');
        expect(result.likePost).toBe('1');
        done();
      }
    ))
  });
  it('Debería filtrar por privaciad', (done) => {
    return getPostsByPrivacity('private', (data)=>{      
        expect(data.length).toBe(3);
        data.forEach((post) => {
          expect(post.privacity).toBe('private');
        })         
        done()
    })
  })


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
})
