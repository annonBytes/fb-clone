import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyACfNTqJgEWL5E15GV-M1_fHTFwUKuSZ8k",
    authDomain: "facebook-clone-f6028.firebaseapp.com",
    projectId: "facebook-clone-f6028",
    storageBucket: "facebook-clone-f6028.appspot.com",
    messagingSenderId: "1021695885262",
    appId: "1:1021695885262:web:a09913b367bfef3130b59f",
    measurementId: "G-G5H87C6C9R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider };
  export default db