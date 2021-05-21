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

export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message as any)
        };
    };
    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;