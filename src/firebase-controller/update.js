export const update = (NuevoUserName, id) => {
  const nuevo = NuevoUserName;
  firebase.firestore().collection('users').doc(id).update({
    Nombre: nuevo,
  });
};
