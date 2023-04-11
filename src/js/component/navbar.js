import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<span className="navbar-brand mb-0 h1 p-3"><img src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png" height="75px" width ="250px"></img></span>
			<div className="ml-auto p-2">
				<Link to="/" className="btn btn-primary">
					{"Back to Home"}
				</Link>
			</div>
		</nav>
	);
};
