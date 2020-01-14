<<<<<<< HEAD
import { signOut, userCurrent } from '../firebase-controller/userAuthentication.js';

=======
import {
  signOut,
} from '../model/user-authentication.js';
>>>>>>> 84b3cb380827e817323d416b7ed556a094de927f

export default () => {
  const viewProfile = `<header>
                      <nav class="topnav" id="myTopnav">
                        <a href="#/home" class="active">~Bon-a-Petit~</a>
                        <div class="dropdown" id="button-nav">
                          <button class="dropbtn"> 
                          MENU
                          </button>
                          <div class="dropdown-content" id="button-nav-content">
                            <a id="user-profile" href="#/profile">Mi perfil</a>
                            <a id="sign-out" href="#/">Cerrar sesión</a>
                          </div>
                        </div>
                      </nav>
                    </header>
                    <section class="container-form">
  <h3>Edita la información en tu cuenta</h3>
  <form class="form-" id="form-register" action="post">
          <img id="photo" class="avatar-profile" src="${userCurrent().photoURL}" alt="placeholder image">
            <div class="input-wrap">
            <input class="input" id="userName" type="text" name="user-name"
              placeholder="Nombre:" value="${userCurrent().displayName}" disabled/>
          </div>
          <div class="input-wrap">
            <input class="input" id="email" type="email" name="email"
              placeholder="Correo de contacto:" value="${userCurrent().email}" disabled/>
          </div>
          <div class="input-wrap">
            <input class="input" id="userMenu" type="text" name="user-menu"
              placeholder="Tipo de menú:"/>
          </div>
          <div class="input-wrap">
            <input class="input" id="address" type="text" name="address"
              placeholder="Dirección:"/>
          </div>
          <div class="btn-wrapper">
                <input id="button-update-profile" class="submit btn" type="submit" value="Guardar cambios">
            </div>
    </form>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.className = 'container-profile';
  divElement.innerHTML = viewProfile;
  const btnNav = divElement.querySelector('#button-nav');
  const btnProfile = divElement.querySelector('#user-profile');
  const btnCerrarSesion = divElement.querySelector('#sign-out');

  btnProfile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/profile';
  });

  btnCerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    window.location.hash = '#/';
  });
  btnNav.addEventListener('click', (e) => {
    e.preventDefault();
    const x = document.getElementById('button-nav-content');
    if (x.className === 'dropdown-content') {
      x.className += ' show';
    } else {
      x.className = 'dropdown-content';
    }
  });
  return divElement;
};
