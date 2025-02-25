import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/login";
  };
  return (
    <div>
      <h1>Login with Instagram</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
