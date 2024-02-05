import React from "react";

import "./Login.css";

const Login = () => {
  const loginwithgoogle = () => {
    window.open(
      "https://frontauth-zkve.onrender.com/auth/google/callback",
      "_self"
    );
  };
  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>SignIn</h1>
        <div className="form">
          <button className="login-with-google-btn" onClick={loginwithgoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
