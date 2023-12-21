import React, { useState, useContext, useRef } from "react";
import { Container } from "react-bootstrap";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  
  const switchModeHandler = () =>{
    setIsLogin((prevState)=>!prevState);
  }
  const submitHandler = async(event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    let url;
    if(isLogin){
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjaQSa5UO8i3OFkMCxXrBYh-0WGjDY6fs";
    }else{
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjaQSa5UO8i3OFkMCxXrBYh-0WGjDY6fs";
    }
    try{
      const res = await fetch(url,{
          method: "POST",
          body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
          throw new Error("Authentication failed!");
      }
      const data = await res.json();
      authCtx.login(data.idToken, data.email);
      navigate('/store');
    }catch(err){
        alert(err.message);
    };
  };
  return (
    <React.Fragment>
      <h2>{isLogin ? "Login" : "SignUp"}</h2>
      <Container style={{ marginBottom: "7rem" }}>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="name@example.com" ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <div className={styles.actions}>
            <button type="submit" >{isLogin ? "Login" : "Create Account"}</button>
            <button type="button" className={styles.toggle} onClick={switchModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Login;
