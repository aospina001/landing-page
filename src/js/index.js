//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/Navbar";
import { Jumbotron } from "./component/Jumbotron";
import { Card } from "./component/Card";
import { Footer } from "./component/Footer";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#app"));
ReactDOM.render(<Jumbotron />, document.querySelector("#app"));
ReactDOM.render(<Card />, document.querySelector("#app"));
ReactDOM.render(<Footer />, document.querySelector("#app"));
