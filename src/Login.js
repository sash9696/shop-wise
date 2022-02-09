import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const login = (e) => {
        e.preventDefault()
        auth
         .signInWithEmailAndPassword(email,password)
         .then((auth) => {
             //user is logged in
             navigate('/')
         }).catch((e) => alert(e.message))
    }
    const register= (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                navigate('/')
            }).catch((e) => alert(e.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="colored_boxshadow"
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="colored_boxshadow"
            type="password"
          />
          <button
            onClick={login}
            type="submit"
            className="login_signIn_button colored_boxshadow"
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Shop-wise Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          className="login_register_button">
          Create your Shop-wise Account
        </button>
      </div>
    </div>
  );
}

export default Login;