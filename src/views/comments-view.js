import { userCurrent } from '../model/user-authentication.js';
import { deleteComment, editComment } from '../model/model-post.js';

export const commentView = (objComment) => {
  const commentContainer = document.createElement('div');
  commentContainer.innerHTML = '';
  const comentTemplate = `
  <div class="box-publication-feed-comment">
    <div class="box-publication-feed-comment-header">
      <p id="name">${objComment.name} dice:</p>
      <p class="clock-comment"><i="true"></i="true">${objComment.time}</p>
    </div>
  </div>
  <div class="box-create-comment">
    <textarea id="comment" name="comment" class="publication" placeholder="Escribe tu  comentario aquí" cols="30" rows="3">${objComment.comentario}</textarea>
    <button id="btn-delete-comentario" class="buttons-comments pointer fa fa-trash" aria-hidden="true"></button>
    <button id="edit-coment" class="buttons-comments pointer fa fa-pencil-square-o" aria-hidden="true"></button>
    <button id="save" class="hide buttons-comments pointer fa fa-floppy-o" aria-hidden="true"></button>

    <button class="btn pull-right" type="submit">Comentar</buttom>
  </div>
  `;
  commentContainer.innerHTML = comentTemplate;
  commentContainer.classList.add('container-comment');
  const eliminar = commentContainer.querySelector('#btn-delete-comentario');
  const textArea = commentContainer.querySelector('#comment');
  const edit = commentContainer.querySelector('#edit-coment');
  const save = commentContainer.querySelector('#save');
  if (userCurrent().id !== objComment.idUsuario) {
    eliminar.classList.add('hide');
    edit.classList.add('hide');
    textArea.disabled = true;
  } else {
    textArea.disabled = true;
    eliminar.addEventListener('click', () => {
      deleteComment(objComment.idPost, objComment.id);
    });
    if (userCurrent().email !== objComment.correo) {
      edit.classList.add('hide');
    } else {
      edit.classList.remove('hide');
      edit.addEventListener('click', () => {
        save.classList.remove('hide');
        edit.classList.add('hide');
        textArea.disabled = false;
        textArea.select();
      });
      save.addEventListener('click', () => {
        editComment(objComment.idPost, objComment.id, textArea.value);
        edit.classList.remove('hide');
        save.classList.add('hide');
        textArea.disabled = true;
      });
    }
  }
  return commentContainer;
};
