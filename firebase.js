// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMNvIOavERDR8PVdxxyoYglgDEGLUe_KU",
  authDomain: "partmat.firebaseapp.com",
  projectId: "partmat",
  storageBucket: "partmat.firebasestorage.app",
  messagingSenderId: "805989333915",
  appId: "1:805989333915:web:ea104709e49c2bd1d6bf3e",
  measurementId: "G-4N3R9PQF21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ esto faltaba
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// exportar todo lo que se va a usar en otras páginas
export { auth, provider, signInWithPopup, onAuthStateChanged, signOut, db, doc, setDoc, getDoc };