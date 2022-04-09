// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1cPYck-80wZtvkckDusKWxr9ElC1dovQ",
  authDomain: "private-route-user-auth.firebaseapp.com",
  projectId: "private-route-user-auth",
  storageBucket: "private-route-user-auth.appspot.com",
  messagingSenderId: "218950616819",
  appId: "1:218950616819:web:77b3123e100bd5de0a5986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;