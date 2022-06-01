// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,

  // apiKey: "AIzaSyA4C4tOhNXUwIYzj9VhV18OeX_0KeXh9oM",
  // authDomain: "final-space-website.firebaseapp.com",
  // projectId: "final-space-website",
  // storageBucket: "final-space-website.appspot.com",
  // messagingSenderId: "116486140265",
  // appId: "1:116486140265:web:6d3f2020840d7ffa75cdf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;