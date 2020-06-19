import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6ynLgRxxNBjRHjvFmKGbgispJZOBmeqQ',
  authDomain: 'crwn-db-ee3d6.firebaseapp.com',
  databaseURL: 'https://crwn-db-ee3d6.firebaseio.com',
  projectId: 'crwn-db-ee3d6',
  storageBucket: 'crwn-db-ee3d6.appspot.com',
  messagingSenderId: '1053500513071',
  appId: '1:1053500513071:web:f6235a965a9754e3e7dfda',
  measurementId: 'G-LY0Z20S2G6',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
