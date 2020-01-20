/*
import { userCurrent } from "../model/user-authentication";


export const setupPost = (data, postContent, user) => {
  const postTemplate = postContent;
  let template = '';
  data.forEach((doc) => {
    const info = doc.data();
    // console.log(guides);
    const div = `
          <div id = "${doc.id}" class="box-publication-feed">
            <div class="box-publication-feed-header">
              <span id ="poster-name">${user.Name} dice:</span>
            </div>
            <div class="box-publication-feed-text">${info.postText} </div>
            <div class="box-likes">
              <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
              </div>
            </div>
            <button id="editar">Editar</button>
            <button id="eliminar">Eliminar</button>
          </div>`;
    template += div;
  });
  postTemplate.innerHTML = template;
  // console.log(postTemplate);
};
*/
import { addPost } from '../model/model-post.js';
import { userCurrent } from '../model/user-authentication.js';

export const timePublic = () => {
  const f = new Date();
  const mes = f.getMonth() + 1;
  const cad = `${f.getDate()}/${mes}/${f.getFullYear()} - ${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`;
  console.log(cad);
  window.status = cad;
  return window.status;
};

export const createPost = () => {
  const comentario = document.getElementById('comentario').value;
  const privacidad = document.getElementById('post-privacy').value;
  const date = timePublic();
  let likes = document.getElementById('contador');
  likes = 0;
  console.log(privacidad);
  console.log(userCurrent());
  addPost(comentario, userCurrent().displayName, userCurrent().uid, privacidad, likes, date)
    .then((response) => {
      document.getElementById('comentario').value = '';
      console.log('se agrego a tu colleccion', response.id);
    }).catch((error) => {
      console.log('no se agrego', error);
    });
};
