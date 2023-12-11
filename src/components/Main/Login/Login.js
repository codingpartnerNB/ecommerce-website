import React, { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  
  const emailChangeHandler = (event)=>{
    setEmail(event.target.value);
  }
  const passwordChangeHandler = (event)=>{
    setPassword(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjaQSa5UO8i3OFkMCxXrBYh-0WGjDY6fs",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error("Authentication failed!");
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate('/store');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <React.Fragment>
      <h2 style={{ margin: "2rem auto", textAlign: "center" }}>Login</h2>
      <Container style={{ marginTop: "3rem", marginBottom: "7rem" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={emailChangeHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={passwordChangeHandler} />
          </Form.Group>
          <Button variant="info" onClick={submitHandler}>
            Login
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Login;
