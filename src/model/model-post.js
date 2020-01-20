/*
import { setupPost } from '../controller-app/post-controller.js';

// get users id on database
export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();

export const addTextPost = (userText, userID, userName, privacy) => (

  firebase.firestore().collection('post').add({
    postText: userText,
    UID: userID,
    name: userName,
    privatePost: privacy,
    datePost: firebase.firestore.FieldValue.serverTimestamp(),
  })
);

export const getTextPost = (content, user) => {
  firebase.firestore().collection('post').get().then(((snapshot) => {
    setupPost(snapshot.docs, content, user);
  }));
};
*/
// export const getPost = (callback) => firebase.firestore().collection('post')
//   .onSnapshot((snapshot) => {
//     const data = [];
//     snapshot.forEach((doc) => {
//       data.push({ id: doc.id, ...doc.data() });
//     });
//     callback(data);
//   });


// export const renderPost = (doc) =>{
// let li  = document.createElement('li');
// let post = document.createElement('span');
// li.setAttribute('data-id', docs.id);
// post.textContent = docs.data().postText;
// li.appendChild(post);

// };
/* aqui mi codigo */
export const getInfoUser = id => firebase.firestore().collection('users').doc(id).get();

export const addPost = (post, nombre, id, estado, likes, date) => firebase.firestore().collection('posts').add({
  text: post,
  name: nombre,
  idUsuario: id,
  privacidad: estado,
  like: likes,
  time: date,
});

export const readPosts = (callback) => {
  firebase.firestore().collection('posts').orderBy('time', 'desc').onSnapshot((datos) => {
    const array = [];
    datos.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
    });
    callback(array);
  });
};

export const deletePost = idD => firebase.firestore().collection('posts').doc(idD).delete();

export const editPrivacity = (idD, newEstdo) => firebase.firestore().collection('post').doc(idD).update({
  like: newEstdo,
});

export const editLike = (idD, newLikes) => firebase.firestore().collection('posts').doc(idD).update({
  like: newLikes,
});

export const editPost = (idD, newText) => firebase.firestore().collection('posts').doc(idD).update({
  text: newText,
});

/*
export const addComment = (text, nombre, postId, id, date) => firebase.firestore().collection('posts').doc(postId).collection('comment')
  .add({
    comenatarios: text,
    name: nombre,
    idPost: postId,
    idUsuario: id,
    time: date,
  });

export const readComments = (idPost, callback) => {
  firebase.firestore().collection('posts').doc(idPost).collection('comment')
    .orderBy('time', 'desc')
    .onSnapshot((datos) => {
      const data = [];
      datos.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        // console.log(data);
      });
      callback(data);
    });
};
export const deleteComment = (idD, id) => firebase.firestore().collection('posts').doc(idD).collection('comment')
  .doc(id)
  .delete();

 export const editComment = (idD, id, newText) => firebase.firestore().collection('posts').doc(idD).collection('comment')
  .doc(id)
  .update({
    comentario: newText,
  });
*/
