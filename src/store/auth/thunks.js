import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/prividers";
import { checkinCredentials, login } from "./authSlice";

export const checkinAutentication = () => async (dispatch) => {
  return async (dispatch) => {
    dispatch(checkinCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkinCredentials());
    const result = await signInWithGoogle();
    dispatch(login(result))
    
  };
};

export const createUserWithEmailAndPassword = ({email, password, displayName})  => {
  return async(dispatch) => {
    const result = await registerUserWithEmailPassword({email, password, displayName});
  }
}