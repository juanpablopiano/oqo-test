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
	disableDefaultUI: false,
	zommControl: true,
};

function MapContainer(props) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	// const [markers, setMarkers] = useState([]);

	if (loadError) return "Error Loading Maps";
	if (!isLoaded) return "Loading Maps";

	const markers = [];
	props.markers.forEach((marker, index) => {
		markers.push(
			<Marker
				zommControl={true}
				visible={marker.checked}
				key={index}
				position={{
					lat: Number(marker.lat),
					lng: Number(marker.lng),
				}}
				icon={{
					url: `http://maps.google.com/mapfiles/ms/icons/${marker.color}`,
				}}
				draggable={false}
			/>
		);
	});

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
			>
				{markers}
			</GoogleMap>
		</div>
	);
}

export default MapContainer;
