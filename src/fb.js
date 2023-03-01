import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

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
const db = getDatabase();
const reference = ref(db, 'user/' + userId);

function writeUserData(userId, name, email, imageUrl) {
    set(reference, {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

writeUserData("001", "John", "email@me.com", "myimageUrl");