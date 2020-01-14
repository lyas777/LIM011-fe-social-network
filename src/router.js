import Register from './views/register.js'

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    root.innerHTML = '';
    switch (router) {
        case '': root.appendChild(Register());
            break;
        case 'register': root.appendChild(Register());
          break;
        default: root.appendChild(Register());
          break; 
    }
};

export const initRouter = () => {
    window.addEventListener('load', viewTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => viewTmp(window.location.hash)
  }
  