import React from "react";
import { firebase } from "./Firebase/firebase";
import "./SignIn.css";
import Navbar from "react-bootstrap/Navbar";
import logo from './UploadIcon.png';

const SignIn = () => {
  const styles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar className="justify-content-center" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>File Upload Financepeer App</Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="40"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar><br />
      <div style={styles}>
        <h2>Google Sign In </h2>
        <button className="buttonn" onClick={SignInWithFirebase}>
          <b>Sign In</b>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
