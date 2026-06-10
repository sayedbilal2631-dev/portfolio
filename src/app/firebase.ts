import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBe1VC55gZOTC_vQOG5BMr6nS3zCXa8cFw",
    authDomain: "portfolio-b9812.firebaseapp.com",
    projectId: "portfolio-b9812",
    storageBucket: "portfolio-b9812.firebasestorage.app",
    messagingSenderId: "292623145822",
    appId: "1:292623145822:web:4a08340cfb950cc7e2cdcf",
    measurementId: "G-W4ZZX35VD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
