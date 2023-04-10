// Import the functions you need from the SDKs you need
// 引入 Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8jlCrkq0Gpha5uOJtwGRaDyrj3-0CumA",
    authDomain: "vueshop2-53eba.firebaseapp.com",
    databaseURL: "https://vueshop2-53eba-default-rtdb.firebaseio.com",
    projectId: "vueshop2-53eba",
    storageBucket: "vueshop2-53eba.appspot.com",
    messagingSenderId: "1003616633807",
    appId: "1:1003616633807:web:a086e09a0c0a9ea0c348ba",
    measurementId: "G-J9V00RZK6L"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);


export { app, database };
