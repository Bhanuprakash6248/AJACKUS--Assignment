import React from 'react';
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
