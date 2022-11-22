import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Developer from '../../pages/Developer';
import Manager from '../../pages/Manager';
import Historian from '../../pages/Historian';

const RoutesTree= () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/historian" element={<Historian />} />
      </Routes>
    );
};

export default RoutesTree;