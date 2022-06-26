// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1q1XrXQVIoeKm5XcXVJ0Ayx5zLbYT508",
  authDomain: "netflix-clone-4010b.firebaseapp.com",
  projectId: "netflix-clone-4010b",
  storageBucket: "netflix-clone-4010b.appspot.com",
  messagingSenderId: "836839312084",
  appId: "1:836839312084:web:442eac460e11a09fa84941",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, auth };
export default db;
