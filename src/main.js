import { initRouter } from './router.js';
import { firebaseConfig } from './firebase-controller/firebaseConfig.js';

window.addEventListener('load', () => {
  firebase.initializeApp(firebaseConfig);
  initRouter();
});

/*
const init = () => {
  firebase.initializeApp(firebaseConfig);
  initRouter();
};
window.onload = init();
*/
