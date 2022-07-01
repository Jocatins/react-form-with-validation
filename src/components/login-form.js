import React, { useState } from "react";
import { login } from "../utils";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const disableButton = !email || password.length < 6 || loading;

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
      alert("successful login");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <label htmlFor={email}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id={email}
          type="email"
          value={email}
        />
      </div>
      <div>
        <label htmlFor={password}>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id={password}
          type="password"
          value={password}
        />
      </div>
      <div className="errorMessage"></div>
      <div className="button">
        <button disabled={disableButton} onClick={handleLogin}>
          Submit
        </button>
      </div>
    </>
  );
};

export default LoginForm;
