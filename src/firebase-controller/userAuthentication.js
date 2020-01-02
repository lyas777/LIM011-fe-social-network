export const createUser = (email, password) => {
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  // custom console
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    // custom console
    console.log(error.message);

    alert(errorCode);

    alert(errorMessage);
  });
};

export const signInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => { console.log('Me loguie'); }).catch((error) => {
    const errorCode = error.code;
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    // custom console
    console.log(errorCode);
    const errorMessage = error.message;
    /* eslint no-alert: "error" */
    alert(errorMessage);
  });
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('Te has logeado con Google');
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;

    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  });
};
export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  /* eslint no-console: "error" */

  // custom console
  console.log(provider);
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('Te has logeado con Facebook');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
  });
};
