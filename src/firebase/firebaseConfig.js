import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNSenhSjmTWhfKcvnqB72YNJORFpQWiO8",
    authDomain: "react-81c61.firebaseapp.com",
    projectId: "react-81c61",
    storageBucket: "react-81c61.appspot.com",
    messagingSenderId: "167998156856",
    appId: "1:167998156856:web:e0d8957b488c3997abb6cd",
    measurementId: "G-RV8W9JRXQD"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }