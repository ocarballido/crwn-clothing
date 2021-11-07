import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDNTnBJAWxj-8NdRN-W35ZtyI00U6mhqeI",
    authDomain: "crwn-db-13c4f.firebaseapp.com",
    projectId: "crwn-db-13c4f",
    storageBucket: "crwn-db-13c4f.appspot.com",
    messagingSenderId: "359579692704",
    appId: "1:359579692704:web:eb14a8d21eed8c044a23c5",
    measurementId: "G-4EJ3Y3CN1B"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;