import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    const errorMessage = error.message;
    return { ok: false, errorMessage };
  }
};

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
   
    
  } catch (error) {
    console.log("🚀 ~ file: prividers.js:22 ~ registerUserWithEmailPassword ~ error:", error); 
    return { ok: false};
    
  }
}