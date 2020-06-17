import React from "react";
import classes from "./components/DestinationsBox/DestinationsBox.module.css";

/* components */
import Navbar from "./components/Navbar/Navbar";
import DestinationsBox from "./components/DestinationsBox/DestinationsBox";

function App() {
	return (
		<div className="App">
			<Navbar />
			<DestinationsBox />
		</div>
	);
}

export default App;
