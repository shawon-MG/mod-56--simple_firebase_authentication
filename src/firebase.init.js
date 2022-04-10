// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvapGmhCaZ43gnJCGsOB97MX9xDmy-4wI",
    authDomain: "mod56-firebase-authentication.firebaseapp.com",
    projectId: "mod56-firebase-authentication",
    storageBucket: "mod56-firebase-authentication.appspot.com",
    messagingSenderId: "332657543155",
    appId: "1:332657543155:web:c3301c3d11a5cba1a37486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;