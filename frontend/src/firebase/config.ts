import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGgMaVn8Mg87gGiBX9wV_m7MEldApKeKc",
    authDomain: "financial-dashboard-4287d.firebaseapp.com",
    projectId: "financial-dashboard-4287d",
    storageBucket: "financial-dashboard-4287d.firebasestorage.app",
    messagingSenderId: "850253136406",
    appId: "1:850253136406:web:8c32fa8e07740233a1ab37",
    measurementId: "G-SFWEFNE67M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireAuth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
