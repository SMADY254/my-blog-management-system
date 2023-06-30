import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Book from "./Pages/Book";
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Home />  } />
        <Route path="/about" element={<About /> } />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
