import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhk3nA9-sW_3us8YNWLPBuWWFH99XAY6E",
  authDomain: "disney-clone-abhi-11e95.firebaseapp.com",
  projectId: "disney-clone-abhi-11e95",
  storageBucket: "disney-clone-abhi-11e95.appspot.com",
  messagingSenderId: "578616622860",
  appId: "1:578616622860:web:b905b71bed4963c7c31329",
  measurementId: "G-Y36LNBQTW8"
};


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;
