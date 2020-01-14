import Register from './views/register.js';
import Login from './views/login.js';
import Home from './views/home.js'
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
        case '': root.appendChild(Login());
            break;
        case '#/': root.appendChild(Login());
            break;
        case '#/login': root.appendChild(Login());
            break;
        case 'register': root.appendChild(Register());
          break;
        case 'home': root.appendChild(Home());
          break;
        default: root.appendChild(Login());
          break; 
    }
};

export const initRouter = () => {
    window.addEventListener('load', viewTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => viewTmp(window.location.hash)
  }
  