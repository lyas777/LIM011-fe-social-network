import {
  // eslint-disable-next-line max-len
  createUser, signInWithFacebook, signInWithGoogle, userCurrent, signInUser, newUser,
} from '../src/model/user-authentication.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockfirestore.child(path) : null),
  () => mockauth,
);

// test de crearUsuario con Farebase
describe('registro de usuario por correo', () => {
  it('Deberia registrarse como nuevo usuario', () => createUser('prueba@prueba.com', '123456789')
    .then((user) => {
      expect(user.email).toEqual('prueba@prueba.com');
    }));
});

describe('Almacenar usuario en BD user', () => {
  it('Debería almacenar al usuario creado en BD', () => newUser('123', 'prueba@prueba.com', 'lili', ''))
    .then((result) => {
      expect(result.ID).toEqual('123');
    });
});
describe('registro de usuario por facebook', () => {
  it('Deberia registrar un nuevo usuario desde Facebook', () => signInWithFacebook()
    .then((result) => {
      expect(typeof result).toEqual('object');
    }));
});
describe('registro de usuario por gmail', () => {
  it('Deberia registrar un nuevo usuario desde Facebook', () => signInWithGoogle()
    .then((result) => {
      expect(typeof result).toEqual('object');
    }));
});

describe('Estado del usuario', () => {
  it('deberia mostrar los datos del usuario ', () => {
    createUser('prueba@prueba.com', '123123')
      .then(() => {
        const user = userCurrent();
        expect(user.email).toEqual('prueba@prueba.com');
      });
  });
});

describe('Iniciar Sesión', () => {
  it('El Usuario debería iniciar sesión', () => {
    signInUser('prueba@prueba.com', '123123')
      .then((user) => {
        expect(user.email).toBe('prueba@prueba.com');
      });
  });
});
