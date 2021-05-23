import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../CSS/LoginForm.css";

import firebase from "../../utils/firebase";

const LoginForm = (props) => {
  const history = useHistory();

  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (evt) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...

        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="loginForm-cont container">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success" onClick={SignIn}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
