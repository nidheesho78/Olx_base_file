import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyARCRjV4ZdtOZ3UHngvmsb5ZdtZfTLdFuU",
  authDomain: "olx-main-81f7f.firebaseapp.com",
  databaseURL: "https://olx-main-81f7f-default-rtdb.firebaseio.com",
  projectId: "olx-main-81f7f",
  storageBucket: "olx-main-81f7f.appspot.com",
  messagingSenderId: "616239358236",
  appId: "1:616239358236:web:bc8a8fb215e82d1934dad9",
  measurementId: "G-FFK3FHJZ20"
};

export const Firebase = firebase.initializeApp(firebaseConfig);