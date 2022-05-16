import React from 'react';
import Slide from './components/Slide';
import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

      <div className='Left_side'>test2</div>
      <div classnae='right_side'></div>
      

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* <Slide/> */}

    </div>
  );
}

export default App;
