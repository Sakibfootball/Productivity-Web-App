import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEHoPkFXKQtpmYqqP12xcl9vw25oKwwfg",
  authDomain: "productivity-web-app-57baa.firebaseapp.com",
  projectId: "productivity-web-app-57baa",
  storageBucket: "productivity-web-app-57baa.appspot.com",
  messagingSenderId: "960779124345",
  appId: "1:960779124345:web:cf12c076d04c7f4de21ea8",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };

