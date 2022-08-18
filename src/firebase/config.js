import { Firebase, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8G2Wn6Qs2SryrZ3R288U9lKJqgPQgIXA",
  authDomain: "vue-live-chat-5a313.firebaseapp.com",
  projectId: "vue-live-chat-5a313",
  storageBucket: "vue-live-chat-5a313.appspot.com",
  messagingSenderId: "965121514797",
  appId: "1:965121514797:web:c608d94df356ffcd6b47a4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
let auth = getAuth(app);
// let timestamps =
console.log(app);
console.log(Firebase);
// app.firestore().FieldValue.serverTimestamps;

export { db, auth };
