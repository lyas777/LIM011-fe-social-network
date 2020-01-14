import { update } from '../firebase-controller/update.js';
import { userCurrent } from '../firebase-controller/userAuthentication';

// para imprimir el nombre y el correo en el perfil

export const printInfoProfile = (userName, userEmail, userPhoto) => {
  const uName = userName;
  const uEmail = userEmail;
  const uPhoto = userPhoto;
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const id = firebase.auth().currentUser.uid;
      firebase.firestore().collection('users').where('ID', '==', id).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            uName.value = doc.data().Name;
            uEmail.value = doc.data().Email;
            uPhoto.value = doc.data().Foto;
          });
        })
        .catch((error) => {
          console.log('Error al obtener el documento', error);
        });
    } else {
      console.log('Ningun usuario ha iniciado');
    }
  });
};

export const updateProfile = (newUserName) => {
  const id = userCurrent().uid;
  update(newUserName, id);
};
