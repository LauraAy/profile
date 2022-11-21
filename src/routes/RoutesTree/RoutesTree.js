import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Developer from '../../pages/Developer';

const RoutesTree= () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    );
};

export default RoutesTree;