import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const credentials = googleProvider.credentialFromResult(result);
        console.log("🚀 ~ file: prividers.js:11 ~ signInWithGoogle ~ credentials:", credentials)
        
    } catch (error) {
        console.log(error);
        
    }
};
