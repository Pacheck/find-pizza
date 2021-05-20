import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfZHhkCcMplbTEf8McipxfzRu0SQakWNo",
    authDomain: "pizza-lovers-c775c.firebaseapp.com",
    projectId: "pizza-lovers-c775c",
    storageBucket: "pizza-lovers-c775c.appspot.com",
    messagingSenderId: "444404338976",
    appId: "1:444404338976:web:f8597ee4222ba6a6010745",
    measurementId: "G-QNCWNNBCSY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;