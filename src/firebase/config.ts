// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCRc-90NZPRDeXsiqpwzi--DjXXl0YaUg",
    authDomain: "openshs-database.firebaseapp.com",
    databaseURL: "https://openshs-database-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "openshs-database",
    storageBucket: "openshs-database.appspot.com",
    messagingSenderId: "82182279645",
    appId: "1:82182279645:web:86b41ef938ac3e0ebe6634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app;
console.log('Firebase configurado');