import React, { useState } from "react";
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

import classes from "./MapContainer.module.css";
import mapStyles from "../../../mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
	width: "100%",
	height: "100%",
};
const center = {
	lat: -33.47234072535552,
	lng: -70.5985548963031,
};
const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zommControl: true,
};

function MapContainer() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
    });
    
    const [markers, setMarkers] = useState([]);

	if (loadError) return "Error Loading Maps";
	if (!isLoaded) return "Loading Maps";

	return (
		<div className={classes.MapContainer}>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={10}
				options={options}
				onClick={(event) => {
					console.log(event);
				}}
			></GoogleMap>
		</div>
	);
}

export default MapContainer;
