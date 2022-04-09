// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBUbaUYWRP0r7eRQMzOfRbh9AguJ1XsfEY",
    authDomain: "ema-john-with-router-mod-55a32.firebaseapp.com",
    projectId: "ema-john-with-router-mod-55a32",
    storageBucket: "ema-john-with-router-mod-55a32.appspot.com",
    messagingSenderId: "842770749772",
    appId: "1:842770749772:web:f41e321bca1c9623d597e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth