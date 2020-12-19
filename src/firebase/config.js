import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGx2axtyuJ6EVKu-X1aU4pmHCTm2sMjaA',
  authDomain: 'auth-development-b5399.firebaseapp.com',
  projectId: 'auth-development-b5399',
  storageBucket: 'auth-development-b5399.appspot.com',
  messagingSenderId: '859006878589',
  appId: '1:859006878589:web:6cccc2c132f087792e8214',
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, auth, timestamp };
