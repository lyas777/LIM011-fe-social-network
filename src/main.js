import { initRouter } from './router.js';
<<<<<<< HEAD
import { firebaseConfig } from './firebase-controller/firebaseConfig.js';

window.addEventListener('load', () => {
  firebase.initializeApp(firebaseConfig);
  initRouter();
});
=======
import { firebaseConfig } from './config/firebaseConfig.js';
>>>>>>> 84b3cb380827e817323d416b7ed556a094de927f

/*
const init = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  initRouter();
};
window.onload = init();
*/
