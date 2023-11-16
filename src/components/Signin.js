import { Button } from "@mui/material";
import React from "react";
import googleimg from "../images/googleimg.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { useNavigate } from "react-router-dom";

function Signin() {

const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(auth);

  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          padding: "50px",
          textAlign: "center",
          borderRadius: "5px",
          minHeight: "20px",
          minWidth: "30px",
        }}
      >
        <img alt="google-img" style={{ width: "100px" }} src={googleimg} />
        <h1 style={{ fontWeight: "300" }}>Create a Google account</h1>
        <h3 style={{ fontWeight: "200" }}>Continue with Gmail </h3>
        <Button onClick={googleSignIn} variant="contained">
          Sign in with google
        </Button>
      </div>
    </div>
  );
}

export default Signin;
