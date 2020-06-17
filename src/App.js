import React from "react";

/* components */
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import DestinationsBox from "./components/DestinationsBox/DestinationsBox";
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className="App">
			<Navbar />
            <Layout />
			<DestinationsBox />
            <Footer />
		</div>
	);
}

export default App;
