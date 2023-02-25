import { signInWithGoogle } from "../../firebase/prividers";
import { checkinCredentials } from "./authSlice";

export const checkinAutentication = () => async (dispatch) => {
  return async (dispatch) => {
    dispatch(checkinCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkinCredentials());
    signInWithGoogle()
  };
};
