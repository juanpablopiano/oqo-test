import React from "react";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Navbar.module.css";

const navbar = () => {
	return (
		<Navbar className={classes.Navbar} bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img
					alt=""
					src="turbus.png"
					width="100px"
					height="30px"
					className="d-inline-block align-top"
				/>{" "}
			</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					<a href="/">
						Share <i className="fa fa-share-alt"></i>
					</a>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default navbar;
