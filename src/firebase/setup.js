// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyAfgQ9vcIYDOMAOa21NK8peEHWS6iokijw",
  authDomain: "clone-f9742.firebaseapp.com",
  projectId: "clone-f9742",
  storageBucket: "clone-f9742.appspot.com",
  messagingSenderId: "1074481848446",
  appId: "1:1074481848446:web:a99a75ae4f7404c24e382f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
