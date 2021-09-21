import React from "react";
import { useState } from 'react';
import { storage } from "./Firebase/firebase";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from './UploadIcon.png';

const Display = () => {

    const [data, setData] = useState([]);

  const styles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

const listItem = () => {
    storage.ref().child('/').listAll()
      .then(res => {
        res.items.forEach((item) => {
          setData(arr => [...arr, item.name]);
        })
      })
      .catch(err => {
        alert(err.message);
      })
  }

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
        <h2>Records of Uploaded Files</h2>
        <br />
        <Button onClick={listItem}>Display Records</Button>
        <br /><br />
        {
          data.map((val) => (
            <h3>{val}</h3>
          ))
        }
      </div>
    </div>
  );
};

export default Display;
