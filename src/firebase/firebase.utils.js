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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      //    console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
