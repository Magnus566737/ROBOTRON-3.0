// firebase-init.js (uses Firebase v12.2.1 CDN modules)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyChGwuGwBV4_n_eK8JUCBOLeshcqKEsgAo",
  authDomain: "robtron3-d77fe.firebaseapp.com",
  projectId: "robtron3-d77fe",
  storageBucket: "robtron3-d77fe.firebasestorage.app",
  messagingSenderId: "1058046235994",
  appId: "1:1058046235994:web:0ebc43e531ac14195a0f63",
  measurementId: "G-96ETYYF7HR"
};

// Init
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Re-export helpers so pages can import from one place
export { collection, addDoc, serverTimestamp };
