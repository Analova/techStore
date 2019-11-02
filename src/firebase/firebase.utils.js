import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAHLIvUeZJBtMEcNGzY7Y0f0JYoQHkXxQE",
  authDomain: "tech-store-8a201.firebaseapp.com",
  databaseURL: "https://tech-store-8a201.firebaseio.com",
  projectId: "tech-store-8a201",
  storageBucket: "tech-store-8a201.appspot.com",
  messagingSenderId: "115870426113",
  appId: "1:115870426113:web:29c9d6716b0b63c7748c00"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
