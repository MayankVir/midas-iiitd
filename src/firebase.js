import firebase from "firebase"

const firebaseConfig = {
      apiKey: "AIzaSyBPI4KM1VTzDUepc8DXublnnw1fnM7EBzA",
      authDomain: "midas-iiitd.firebaseapp.com",
      projectId: "midas-iiitd",
      storageBucket: "midas-iiitd.appspot.com",
      messagingSenderId: "678562764362",
      appId: "1:678562764362:web:16060bc48f8cd80711f8b3"
    };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;