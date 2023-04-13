
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLEf4pnsNj1BRs1auuqbCXQcYG7Dh2cSs",
  authDomain: "openaipage-3d825.firebaseapp.com",
  projectId: "openaipage-3d825",
  storageBucket: "openaipage-3d825.appspot.com",
  messagingSenderId: "808461214051",
  appId: "1:808461214051:web:e1c53d62547bf4aa2b7356",
  measurementId: "G-SJRXMDG72T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };
