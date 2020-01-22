import {
  deletePost,
  editPost,
} from '../model/model-post.js';
import { userCurrent } from '../model/user-authentication.js';

export const postView = (objPost) => {
  const postContainer = document.createElement('div');
  let postTemplate = '';
  console.log('la privacidad', objPost.privacidad, 'el id usuario', objPost.idUsuario, 'el user current', userCurrent().uid);
  if (objPost.privacidad === 'public' || objPost.idUsuario === userCurrent().uid) {
    postTemplate = ` 
    <div id = "${objPost.id}" class="box-publication-feed">
      <div class="box-publication-feed-header">
        <span id ="poster-name">${objPost.name} dice:</span>
      </div>
      <div class="box-publication-feed-text">
      <p class="" name="comentarios" id="comment">${objPost.text}</p>
      </div>
      <div class="box-likes">
        <div class="text-likes">
          <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
          <p class ="post-date">${objPost.time}</p>
          <button id="editar">Editar</button>
          <button id="eliminar-${objPost.id}">Eliminar</button>
        </div>
      </div>
    </div>`;
    postContainer.innerHTML = postTemplate;
    postContainer.classList.add('container-post');
    // const comment = postContainer.querySelector('#comment');
    const eliminar = postContainer.querySelector(`#eliminar-${objPost.id}`);
    eliminar.addEventListener('click', () => {
      deletePost(objPost.id);
    });
  }
  return postContainer;
};
