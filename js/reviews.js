// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBiWD3CN8Aupl7_-j8NKD6vGhzeMLVHe7g",

  authDomain: "spoekle-com-review.firebaseapp.com",

  databaseURL: "https://spoekle-com-review-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "spoekle-com-review",

  storageBucket: "spoekle-com-review.appspot.com",

  messagingSenderId: "49839932889",

  appId: "1:49839932889:web:7ec7a1667da03bd79b85c8",

  measurementId: "G-CQVFQ21HQW"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
