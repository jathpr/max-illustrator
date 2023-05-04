import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: "max-illustrator.firebaseapp.com",
  projectId: "max-illustrator",
  storageBucket: "max-illustrator.appspot.com",
  messagingSenderId: process.env.GATSBY_MESSAGING_ID,
  appId: process.env.GATSBY_APP_ID,
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
