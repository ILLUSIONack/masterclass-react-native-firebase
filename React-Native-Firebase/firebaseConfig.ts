import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
// TODO: - Opdracht 1
  apiKey: "AIzaSyBkmaTfzpt34wAPQQ-7oIpWZOdkU7X81iQ",
  authDomain: "react-native-firebase-6ab7e.firebaseapp.com",
  projectId: "react-native-firebase-6ab7e",
  storageBucket: "react-native-firebase-6ab7e.appspot.com",
  messagingSenderId: "290025329039",
  appId: "1:290025329039:web:4673bb3bfe2886a9dd3bfa",
  measurementId: "G-NZLZ538J6Y"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);