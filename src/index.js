import React from 'react';
import { render } from "react-dom"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>,
    rootElement
  );
  


