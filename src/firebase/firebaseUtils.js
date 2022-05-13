import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSzBXe4CIil1c9ZNhTZCkykuYUYydaUxc",
  authDomain: "moviely-d53f2.firebaseapp.com",
  projectId: "moviely-d53f2",
  storageBucket: "moviely-d53f2.appspot.com",
  messagingSenderId: "13591194154",
  appId: "1:13591194154:web:68731256b08d521ce43153",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        watchlist: [],
      });
    } catch (error) {
      console.log("error.message");
    }
  }
  return userRef;
};
export const db = firebase.firestore();
export default firebase;
