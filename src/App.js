import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Home from "./components/Home";
import List from "./components/List";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";
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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/list" element={
            <React.Fragment>
              <Alert alert={alert} />
              <List showAlert={showAlert} />
            </React.Fragment>
          } />
        </Routes>
    </>
  );
}

export default App;
