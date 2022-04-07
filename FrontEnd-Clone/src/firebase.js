
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlJJ4tvqr3ExQITKH8czejkWcZA6kgrYE",
    authDomain: "sof-clone.firebaseapp.com",
    projectId: "sof-clone",
    storageBucket: "sof-clone.appspot.com",
    messagingSenderId: "297880588180",
    appId: "1:297880588180:web:1e93f5c1095d3616c98981",
    measurementId: "G-ZBRVSM7Y2J"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;







