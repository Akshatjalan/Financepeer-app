import React from "react";
import { firebase } from "./Firebase/firebase";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import logo from './UploadIcon.png';

const Home = () => {
  const SignOut = () => {
    firebase.auth().signOut();
  };

  const ReadData = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File Uploaded");
    });
  };

  const styles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
      </Navbar>
      <div style={styles}>
        <h2>Upload Your Files Here</h2>
        <br />
        <input type="file" onChange={ReadData} />
        <br />

        <ButtonGroup aria-label="Basic example">
          <Popup trigger={<Button> Upload</Button>} position="top center">
            <div>File Uploaded in Firebase</div>
          </Popup>
          <Link to="/display">
            <Button variant="secondary">Display Records</Button>
          </Link>
        </ButtonGroup>
        <br />
        <br />
        <Button variant="danger" onClick={SignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Home;
