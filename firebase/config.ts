// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZ0I4CK-Xm8qs4coU1uow92w4tr3zBTw",
  authDomain: "coderhouse-next.firebaseapp.com",
  projectId: "coderhouse-next",
  storageBucket: "coderhouse-next.appspot.com",
  messagingSenderId: "554311644176",
  appId: "1:554311644176:web:171b14c0d36ccb1c6a0695",
  measurementId: "G-7XG7SC1NL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
