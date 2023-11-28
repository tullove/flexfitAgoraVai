import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9gtAggP34D3mAv8jnOhGoBtARurI_Wjs",
  authDomain: "flexfit-e55f3.firebaseapp.com",
  projectId: "flexfit-e55f3",
  storageBucket: "flexfit-e55f3.appspot.com",
  messagingSenderId: "922043983150",
  appId: "1:922043983150:web:8826e6b4049b1095bbc6bf",
  measurementId: "G-W2Z59V0FNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };