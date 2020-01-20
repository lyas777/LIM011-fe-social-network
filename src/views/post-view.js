export const postView = (objNote) => {
  const divPost = document.createElement('div');
  divPost.classList.add('post');
  divPost.innerHTML = ` 
  <div id = "${objNote.docID}" class="box-publication-feed">
            <div class="box-publication-feed-header">
              <span id ="poster-name">${objNote.name} dice:</span>
            </div>
            <div class="box-publication-feed-text">${objNote.text}</div>
            <div class="box-likes">
              <div class="text-likes">
                <img class="heart-likes" src="./img/lover.svg" alt="Likes heart picture"/>
                <p class ="post-date">${objNote.time}</p>
                <button id="editar">Editar</button>
                <button id="eliminar">Eliminar</button>
              </div>
            </div>
          </div>`;
  return divPost;
};
