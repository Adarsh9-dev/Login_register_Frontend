import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home/Home";
import "./App.css";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
