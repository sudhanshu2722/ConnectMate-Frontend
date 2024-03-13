import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"element={<Login />}></Route>
          <Route exact path="/sign-up"element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>

  );
};

export default App;


