import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCD98flFnXzj6GXkR5XPANZ5-EbWZzzxwc",
  authDomain: "nxt-fire-app-925c3.firebaseapp.com",
  projectId: "nxt-fire-app-925c3",
  storageBucket: "nxt-fire-app-925c3.appspot.com",
  messagingSenderId: "77009249702",
  appId: "1:77009249702:web:5a969a77ea9384b70bdb67",
  measurementId: "G-06RX0465QJ"
}

if ( !firebase.apps.length ) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()