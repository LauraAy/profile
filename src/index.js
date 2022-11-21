import React from "react";
import ReactDom from "react-dom";
import {HashRouter as Router} from "react-router-dom"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import App from "./app.js"

ReactDom.render(
    <React.StrictMode>
    <Router>
        <App />
    </Router>
    </React.StrictMode>,
    document.getElementById("root")
);


