import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBmI9bEUQshZtWPt2eK4Za8TYTefQb0ChU",
  authDomain: "react-unal-bootcamp.firebaseapp.com",
  projectId: "react-unal-bootcamp",
  storageBucket: "react-unal-bootcamp.appspot.com",
  messagingSenderId: "329333558087",
  appId: "1:329333558087:web:ad643c311c9f60539f9a62"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);

