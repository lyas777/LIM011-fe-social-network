import {
  signOut,
} from '../model/user-authentication.js';
// import { addTextPoaddTextPostst, getTextPost } from '../model/model-post.js';
import { postView } from './post-view.js';

import { createPost } from '../controller-app/post-controller.js';

export default (user, call) => {
  // console.log(user);

  const homeView = `<header>
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
<section class="box-home">
<div class="box-profile">
    <div class="banner-profile">
      <img class="banner-img" src="./img/Food-Delivery-350x150.jpg" alt="User Banner Image">
    </div>
    <div class="info-profile">
      <img src=${user.Photo === null ? './img/profile-user2.svg' : user.Photo} class="user-icon"/>
      <div id="info-profile" class="user-name">
        <h1 id = "userName">${user.Name}</h1>
        <h1 id = "email">${user.Email}</h1>
      </div>
    </div>
</div>
<div class="total">
<div class="box-create-publication">
    <textarea id="comentario" name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></textarea>
      <div class= "options-post">
        <label id="btn-file" >
          <input type="file" name ="fichero" id="fichero" class="hide">
            <!-- <button id="fichero" class="btn-add-image pull-left" type="submit"></buttom> -->     
          <select id="post-privacy" >
            <option value="public" id="public">Public</option>
            <option value="private" id="private">Private</option>
          </select>
        </label>
        <button id="compartir" class="btn pull-right" type="submit">Compartir</buttom>
      </div>      
      </div>
        <div class="posts-content" id="posts-content"></div>
      </div>
</div>
</section>
`;

  const divElement = document.createElement('div');
  divElement.className = 'container-home';
  divElement.innerHTML = homeView;

  const postContent = divElement.querySelector('#posts-content');
  call.forEach((objeto) => {
    postContent.appendChild(postView(objeto));
  });

  const btnCompartir = divElement.querySelector('#compartir');

  btnCompartir.addEventListener('click', () => {
    createPost(user.Name, user.ID);
  });


  const btnNav = divElement.querySelector('#button-nav');
  const btnCerrarSesion = divElement.querySelector('#sign-out');
  const btnProfile = divElement.querySelector('#user-profile');

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
