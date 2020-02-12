//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

Document.getElementByName("close").addEventListener(
	"click",
	function(e) {
		e.preventDefault();
		this.parentNode.style.display = "none";
	},
	false
);
