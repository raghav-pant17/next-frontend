import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";
import { Link } from "react-router-dom";

import axios from "axios";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData });

    try {
      const res = await axios.post(
        "http://localhost:8080/api/customer/login",
        formData
      );
      if (res.data.error === undefined) {
        navigate("/profile", { state: res.data.data });
      } else {
        alert(res.data.error);
      }
    } catch (e) {
      alert(e.res.data.message);
      console.error("Login error:", e.res.data.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-login container">
      <h1 className="header">LOGIN</h1>

      <form onSubmit={onSubmit}>
        <>
          <input
            className="input-style"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <input
            className="input-style"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </>
        <button className="buttons" type="submit">
          {"Login"}
        </button>
      </form>

      <p className="footer">
        {"Don't have an account?"}

        <Link to="/sign-up">
          <button className="btn btn-success">{"Sign Up"}</button>
        </Link>
      </p>
    </div>
  );
}
export default Login;
