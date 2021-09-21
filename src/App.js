import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Display from "./Display";
import Home from "./Home";
import {firebase} from './Firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user)=> {
    if(user){
      return setIsSignedIn(true)
    }

    setIsSignedIn(false);
  })

  if (isSignedIn === true) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/display" component={Display} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;
