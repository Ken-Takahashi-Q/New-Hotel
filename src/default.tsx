import { initializeApp } from 'firebase/app';
import "firebase/database";
import { } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDON7Nv3EoLPDIQanVTN5YeXq8Q13PoQ2U",
    authDomain: "alto-hotel.firebaseapp.com",
    databaseURL: "https://alto-hotel-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alto-hotel",
    storageBucket: "alto-hotel.appspot.com",
    messagingSenderId: "291022622615",
    appId: "1:291022622615:web:2b39bf8ea2dbc6526cbed2",
    measurementId: "G-6Z9CPTPZ66"
};

const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }