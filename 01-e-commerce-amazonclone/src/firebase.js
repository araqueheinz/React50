import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFDJu_N_iw3KheD4yAc2al0LfuvhmwGEU",
    authDomain: "e-commerceapp-7042e.firebaseapp.com",
    projectId: "e-commerceapp-7042e",
    storageBucket: "e-commerceapp-7042e.appspot.com",
    messagingSenderId: "791660981795",
    appId: "1:791660981795:web:a24fb31b4aae54e8324b96"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
