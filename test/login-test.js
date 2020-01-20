import { createUser, signInUser } from '../src/model/user-authentication.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
  () => mockfirestore,
);
describe('iniciar Sesión', () => {
  it('Deberia iniciar sesion', () => signInUser('algo@algo.com', '123123')
    .then((user) => {
      expect(user.email).toBe('algo@algo.com');
    }));
});

describe('registro de usuario', () => {
  it('Deberia poder registrarse como Usuario', () => {
    createUser('algo@algo.com, 123123')
      .then((user) => {
        expect(user.email).toBe('algo@algo.com');
      });
  });
});
