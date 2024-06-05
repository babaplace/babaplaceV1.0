import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFjlmDq6sXXsMQ7cnkiEd5MhOCaZLRx3Y",
  authDomain: "babaplace.firebaseapp.com",
  projectId: "babaplace",
  storageBucket: "babaplace.appspot.com",
  messagingSenderId: "801957332254",
  appId: "1:801957332254:web:0d51d54f950040ca51b50f",
  measurementId: "G-8KBYTHNYQY",
};

// Initialize Firebase
export const storageFirebase = initializeApp(firebaseConfig);
