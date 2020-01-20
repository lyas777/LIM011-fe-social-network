import MockFirebase from 'mock-cloud-firestore';
import {
  addPostFirebase, getPost, deletePost, editPost, privacyPost, addLikeDb, getLike, deleteLikeDb,
} from '../src/lib/model/modelPost.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abcd123456: {
          email: 'usuario@gmail.com',
          textPost: 'post de viajes',
          idPost: '1',
          date: '30/08/19',
          typePost: 'privado',
          __collection__: {
            likes: {
              __doc__: {
                xyz012: {
                  iduser: 'xyz012',
                  idPost: 'abcd123456',
                  email: 'prueba@gmail.com',
                },
              },
            },
          },
        },
        efgh123456: {
          email: 'prueba@gmail.com',
          textPost: 'vamos de viaje',
          idPost: '2',
          date: '31/08/19',
          typePost: 'privado',
          __collection__: {
            likes: {
              __doc__: {
                xyz007: {
                  iduser: 'xyz007',
                  idPost: 'efgh123456',
                  email: 'usuario@gmail.com',
                },
              },
            },
          },
        },
      },
    },
  },
};