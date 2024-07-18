import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAe3joSa39bxaYTAcVEIldIN_DEds8VE8s",
  authDomain: "authentication-4be77.firebaseapp.com",
  projectId: "authentication-4be77",
  storageBucket: "authentication-4be77.appspot.com",
  messagingSenderId: "894024611576",
  appId: "1:894024611576:web:81e9dcae721cc413652d0d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
