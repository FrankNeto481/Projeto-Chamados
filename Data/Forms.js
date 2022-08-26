// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeJG6Lrnxq0Tx_8kpj3FOb21PzgtyE7mA",
  authDomain: "helpdesk-project-52081.firebaseapp.com",
  projectId: "helpdesk-project-52081",
  storageBucket: "helpdesk-project-52081.appspot.com",
  messagingSenderId: "994729146387",
  appId: "1:994729146387:web:75f832c1847744f9efa7e6",
  measurementId: "G-WLB4VTT16N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);