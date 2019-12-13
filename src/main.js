import { changeView } from './controllers/route.js';

const initRouter = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyC_VFtRcZE1fWUZBVPCkaXelz8Fz57Qzg8',
    authDomain: 'red-social-lvm.firebaseapp.com',
    databaseURL: 'https://red-social-lvm.firebaseio.com',
    projectId: 'red-social-lvm',
    storageBucket: 'red-social-lvm.appspot.com',
    messagingSenderId: '253733620558',
    appId: '1:253733620558:web:3ddb0f1e493080cfc1ac1f',
    measurementId: 'G-HY6JHQPEC5',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  initRouter();
};
window.onload = init();
