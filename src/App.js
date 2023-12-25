import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Mainpage from "./page/mainpage";


function App() {
  return (
    <Router>
      <Nav/>
        


        <Routes>
          <Route
            path="/"
            element={<Mainpage />}
          />
        </Routes>
    </Router>
  );
}

export default App;
