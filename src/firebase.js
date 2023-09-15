// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5uyDgT1h8OccC9QjzNvbIyqNGZxhnMs",
  authDomain: "duytan-ab.firebaseapp.com",
  databaseURL: "https://duytan-ab-default-rtdb.firebaseio.com",
  projectId: "duytan-ab",
  storageBucket: "duytan-ab.appspot.com",
  messagingSenderId: "644487789014",
  appId: "1:644487789014:web:81185e1fe6804874d90c77",
  measurementId: "G-FVDT9459WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);