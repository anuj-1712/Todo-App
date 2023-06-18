import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Home from "./components/Home";
import List from "./components/List";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  // creating a function to show alert when the list is empty or when list is added
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/list">
            <Alert alert={alert} />
            <List showAlert={showAlert} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
