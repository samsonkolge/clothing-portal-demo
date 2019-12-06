import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhuTw5KbVke-RpT4C4GRZNoXuEYd_TyS8",
    authDomain: "crwn-db-928af.firebaseapp.com",
    databaseURL: "https://crwn-db-928af.firebaseio.com",
    projectId: "crwn-db-928af",
    storageBucket: "crwn-db-928af.appspot.com",
    messagingSenderId: "93010514233",
    appId: "1:93010514233:web:c318afc6892e1dec4a98e8",
    measurementId: "G-ENGVBPMJK4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;