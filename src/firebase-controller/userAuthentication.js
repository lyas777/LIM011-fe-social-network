export const createUser = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);
export const signInUser = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
  return firebase.auth().signInWithPopup(provider);
};
export const signOut = () => {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
    console.log('Has cerrado sesion');
  }).catch((error) => {
  // An error happened.
    console.log(error, 'Estarás aquí para la eternidad');
  });
};

export const userCurrent = () => (
  firebase.auth().currentUser
);

// para llenar la base de datos
export const newUser = (id, email, name, photo) => (
  firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Email: email,
    Name: name,
    Foto: photo,
  })
);
