import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Book from "./Pages/Book";
import AuthPage from './Pages/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/home" element={<Home />  } />
        <Route path="/about" element={<About /> } />
        <Route path="/book" element={<Book />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
