import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: "chat-realtime-8f2eb.firebaseapp.com",
  projectId: "chat-realtime-8f2eb",
  storageBucket: "chat-realtime-8f2eb.appspot.com",
  messagingSenderId: "1025481083375",
  appId: "1:1025481083375:web:aa71ade12156499e45ce1a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
