// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcwNqVMkbu8RcoVcCjPrdX-EG6JpD_uR4",
    authDomain: "netflix-clone-90c89.firebaseapp.com",
    projectId: "netflix-clone-90c89",
    storageBucket: "netflix-clone-90c89.appspot.com",
    messagingSenderId: "749395481989",
    appId: "1:749395481989:web:317e2225e2b2412129e0ec",
    measurementId: "G-2D49S117EQ"
  };

  // here we will initialize the firebase app
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();


  //Note: to export he data we have deafult export and explicite export because we had one deafult export and many explicite export
  export {auth} ; // explicite export
  export default db; // deafult export


