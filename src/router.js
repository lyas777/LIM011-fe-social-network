import { components } from './views/components.js';
import { getInfoUser } from './model/model-post.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': container.appendChild(components.login());
      break;
    case '#/': container.appendChild(components.login());
      break;
    case '#/register': container.appendChild(components.register());
      break;
    case '#/home': {
      const user = firebase.auth().currentUser;
      // console.log(user, user.uid);
      getInfoUser(user.uid)
        .then((response) => {
          // console.log(response);
          const dataUser = response.data();
          // console.log(dataUser);
          container.appendChild(components.home(dataUser));
        });
      break;
    }
    case '#/profile': container.appendChild(components.profile());
      break;
    default: container.appendChild(components.notfound());
      break;
  }
};

export const initRouter = () => {
  window.addEventListener('load', changeView(window.location.hash));
  if (('onhashchange' in window)) {
    window.onhashchange = () => changeView(window.location.hash);
  }
};

/* anterior
export const initRouter = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

*/
