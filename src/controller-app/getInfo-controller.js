// infor para pintar en el hom
export const getInfo = (userName, userEmail, userPhoto) => {
  const uName = userName;
  const uEmail = userEmail;
  const uPhoto = userPhoto;

  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const id = firebase.auth().currentUser.uid;
      firebase.firestore().collection('users').where('ID', '==', id).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log('Datos del Documento: ', doc.data());
            uName.textContent = doc.data().Name;
            uEmail.textContent = doc.data().Email;
            uPhoto.textContent = doc.data().Foto;
          });
        })
        .catch((error) => {
          console.log('error al obtener el documento', error);
        });
    } else {
      console.log('Ningun usuario ha iniciado sesión');
    }
  });
};

/*
export const getInfo = (profile) => {
  const p = profile;
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // se incia seción
      const id = firebase.auth().currentUser.uid;
      // obtención de datos de un documento
      firebase.firestore().collection('users').where('ID', '==', id).get()
        .then((querySnapshot) => {
          p.innerHTML = '';
          querySnapshot.forEach((doc) => {
            // console.log('Datos del documento: ', doc.data());
            p.innerHTML
            += `
           <img id = "photo" class= "user-icon" src="${doc.data().Foto}" alt="User Profile Picture">
            <div class="user-name">
              <h1 id = "userName">${doc.data().Name}</h1>
              <h1 id = "email">${doc.data().Email}</h1>
            </div>            `;
          });
        })
        .catch((error) => {
          console.log('Error al obtener el documento', error);
        });
    } else {
      console.log('Ningun usuario ha iniciado sesion');
    }
  });
};

*/
