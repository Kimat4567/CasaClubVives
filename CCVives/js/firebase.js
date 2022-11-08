/*
Archivo de configuración de base de datos.
*/

const firebaseConfig = {
    apiKey: "AIzaSyCr4JGL6P9qh85ICSuXyxA_-Qxqa3GO9PM",
    authDomain: "ccvives-f03d1.firebaseapp.com",
    projectId: "ccvives-f03d1",
    storageBucket: "ccvives-f03d1.appspot.com",
    messagingSenderId: "1021367952978",
    appId: "1:1021367952978:web:de7a9b949841970780e18b",
    measurementId: "G-FS14YC44QH"
  };

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const db = firebase.firestore()