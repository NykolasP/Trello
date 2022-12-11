// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPp72Dz9l3Xpzx_3zvYC9t7eVMCHtIP5k",
  authDomain: "trello-project-livecampus.firebaseapp.com",
  databaseURL: "https://trello-project-livecampus-default-rtdb.firebaseio.com",
  projectId: "trello-project-livecampus",
  storageBucket: "trello-project-livecampus.appspot.com",
  messagingSenderId: "744266025619",
  appId: "1:744266025619:web:b5b99117c9ee907fd71b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);