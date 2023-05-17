// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPexZEpEuqG0buA0UR7Qm5AEM9tl69hB4",
    authDomain: "auth-firebase-context-ta-62eea.firebaseapp.com",
    projectId: "auth-firebase-context-ta-62eea",
    storageBucket: "auth-firebase-context-ta-62eea.appspot.com",
    messagingSenderId: "1011752720228",
    appId: "1:1011752720228:web:4a49f26423ea1efff1cc71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app