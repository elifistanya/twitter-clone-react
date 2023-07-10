// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "twitter-clone-yt-c93e8.firebaseapp.com",
    projectId: "twitter-clone-yt-c93e8",
    storageBucket: "twitter-clone-yt-c93e8.appspot.com",
    messagingSenderId: "799681187296",
    appId: "1:799681187296:web:535d4c03f912338f716f85"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
