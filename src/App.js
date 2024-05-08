// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; // Import your CSS file here
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
 
  return (
    
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>

   


  );
}

export default App;
