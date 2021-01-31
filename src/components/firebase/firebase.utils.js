import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG4VS3K75autOGUwc3QEnrOoZ-iuTV9mI",
    authDomain: "mamis-fashion-db.firebaseapp.com",
    projectId: "mamis-fashion-db",
    storageBucket: "mamis-fashion-db.appspot.com",
    messagingSenderId: "1010596210624",
    appId: "1:1010596210624:web:d4a8568c4e2d22627a8a25",
    measurementId: "G-QMK2XL0CT8"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAT = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAT,
          ...additionalData
        })

      }catch (error){

        console.log('error creating the user', error.message);

      }

    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;