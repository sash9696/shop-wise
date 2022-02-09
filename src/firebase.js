import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiwSEFm_mk07Lp20qhywn7M6q1RF-GPao",
    authDomain: "shop-wise22.firebaseapp.com",
    projectId: "shop-wise22",
    storageBucket: "shop-wise22.appspot.com",
    messagingSenderId: "607567580733",
    appId: "1:607567580733:web:bb1abc14c2af9ed9cb2454"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;