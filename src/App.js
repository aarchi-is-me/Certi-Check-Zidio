import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Price from './components/Price';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/price' element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
