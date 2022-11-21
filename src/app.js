import React from 'react';
import RoutesTree from "./routes/RoutesTree";
// import Home from './pages/Home';
// import Developer from './pages/Developer';
// import Manager from '.pages/Manager'
// import Historian from '.pages/Historian'
import NavbarComponent from './components/Navbar';
// import {Route, Routes} from "react-router-dom";
// import Home from "./pages/Home";
// import Developer from './pages/Developer';



function App() {
    return (
        <NavbarComponent />,
        <RoutesTree />
    )
  }

export default App;