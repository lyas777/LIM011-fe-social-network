
/*
export itemPost = (post) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
            <div id = "id" class="box-publication-feed">
            <div class="box-publication-feed-header">
            <span id ="poster-name">alguien dice:</span>
            </div>
            <div class="box-publication-feed-text">
            <p >${info.postText} </p>
            </div>
            <div class="box-likes">
            <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
            </div>
            </div>
            <button id="editar">Editar</button>
            <button id="eliminar">Eliminar</button>
        </div>
    `;
}
*/
import { userCurrent } from '../model/user-authentication.js';
import {
  deletePost,
  editPost,
  addComment,
  readComments,
  editLike,
  editPrivacity,
} from '../model/model-post.js';
import { commentView } from './comments-view.js';
import { timePublic } from '../controller-app/post-controller.js';

export const postView = (objPost) => {
  const postContainer = document.createElement('div');
  let postTemplate = '';
  if (objPost.privacidad === 'Publico' || objPost.idUsuario === userCurrent().uid) {
    postTemplate = `
<div class="feed">
  <div class="box-publication-feed">
    <div class="box-publication-feed-header">
      <p id="nombre" class="creador">Publicado por ${objPost.name} | </p>
      <p id="privacidad-no-user">${objPost.privacidad}</p>
      <select class="hide select pointer" id="post-privacy-user" >
        <option value="public" id="public">public</option>
        <option value="private" id="private">private</option>
      </select>
    </div>
     <p class="clock"><i class="fa fa-clock-o" aria-hidden="true"></i> ${objPost.time}</p>
  </div>
  <div class="box-publication-feed-text">
    <textarea name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30"
    rows="5">${objPost.text}</textarea>
    <p id="count" class="count" >${objPost.like}</p>
    <img class="heart-likes" src="./img/heart.png">
    <button id="editar" class="btn pull-right">editar</button>
    <button id="guardar" class="btn pull-right">guardar</button>
    <button class="btn pull-right" type="submit">Enviar</buttom>
  </div>
</div>
      `;
    postContainer.innerHTML = postTemplate;
    postContainer.classList.add('container-post');
    const textArea = postContainer.querySelector('#newComent');
    const editar = postContainer.querySelector('#editar');
    const eliminar = postContainer.querySelector('#btn-delete');
    const guardar = postContainer.querySelector('#guardar');
    const postPrivacyUser = postContainer.querySelector('#post-privacy-user');
    postPrivacyUser.value = objPost.privacidad;
    const privacidadNoUser = postContainer.querySelector('#privacidad-no-user');

    if (objPost.idUsuario !== userCurrent().uid) {
      eliminar.classList.add('hide');
      editar.classList.add('hide');
      textArea.disabled = true;
    } else {
      textArea.disabled = true;
      postPrivacyUser.classList.remove('hide');
      privacidadNoUser.classList.add('hide');
      postPrivacyUser.addEventListener('click', (event) => {
        const indice = event.target.value;
        editPrivacity(objPost.id, indice);
      });
      eliminar.addEventListener('click', () => {
        deletePost(objPost.id);
      });
      editar.addEventListener('click', () => {
        guardar.classList.remove('hide');
        editar.classList.add('hide');
        textArea.disabled = false;
        textArea.select();
      });
      guardar.addEventListener('click', () => {
        editPost(objPost.id, textArea.value);
        editar.classList.remove('hide');
        guardar.classList.add('hide');
        textArea.disabled = true;
      });
    }
    const like = postContainer.querySelector('#like');
    like.addEventListener('click', () => {
      // like.classList.add('hide');
      const valor = objPost.like + 1;
      editLike(objPost.id, valor);
    });
    const comentar = postContainer.querySelector('#button-coment');
    comentar.addEventListener('click', () => {
      const comentario = postContainer.querySelector('#comment-new').value;
      // console.log(comentario);
      const date = timePublic();
      addComment(comentario, userCurrent().email, objPost.id, objPost.email, date)
        .then((response) => {
          postContainer.querySelector('#comment-new').value = '';
          console.log('Se agregó a tu collección', response.id);
        }).catch((error) => {
          console.log('No se agregó', error);
        });
    });
    const comments = postContainer.querySelector('#comments-container');
    readComments(objPost.id, (dato) => {
      comments.innerHTML = '';
      dato.forEach((obj) => {
        comments.appendChild(commentView(obj));
      });
    });
  }
};
