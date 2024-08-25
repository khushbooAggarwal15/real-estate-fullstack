import React from "react";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: result.user.email,
          photo: result.user.photoURL,
          name: result.user.displayName,
        }),
      });
      const data = await response.json();
      if (data.sucess == false) {
        dispatch(signInFailure(data.message));
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Error Occured during Google Sign In");
    }
  };
  return (
    <button
      type="button"
      className="text-white bg-red-700 rounded-lg p-3 hover:opacity-85"
      onClick={handleGoogleClick}
    >
      Continue With Google
    </button>
  );
};

export default OAuth;
