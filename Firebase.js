// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATu9TCfqtLd9O-gUVk17tF6LZyf1nW7HQ",
  authDomain: "insta-2-yt-826a9.firebaseapp.com",
  projectId: "insta-2-yt-826a9",
  storageBucket: "insta-2-yt-826a9.appspot.com",
  messagingSenderId: "655767843672",
  appId: "1:655767843672:web:59278edc0fd6fe591c2b2d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };