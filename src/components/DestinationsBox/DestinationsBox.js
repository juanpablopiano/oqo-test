import React, { Component } from "react";
import classes from "./DestinationsBox.module.css";
import axios from "axios";

/* componentes */
import MapContainer from "./MapContainer/MapContainer";

class DestinationsBox extends Component {
	state = {
		destionationsList: [],
		markers: [],
	};
	markerColors = [
		"pink-dot.png",
		"yellow-dot.png",
		"purple-dot.png",
		"blue-dot.png",
		"red-dot.png",
		"green-dot.png",
		"ltblue-dot.png",
		"orange-dot.png",
		"grn-pushpin.png",
		"red-pushpin.png",
	];
	dataList = [];
	dataDom = [];

	componentDidMount() {
		axios
			.get(
				"https://thingproxy.freeboard.io/fetch/http://suzukimotos.cl/wp-json/wp/v2/concesionarios"
			)
			.then(async (response) => {
				const newMarkers = [];
				await this.dataList.push(...response.data);
				await this.dataList.forEach((element, index) => {
					newMarkers.push({
						lat: element["cn-map"].lat,
						lng: element["cn-map"].lng,
                        checked: false,
                        color: this.markerColors[index]
					});
					this.setState((current) => {
						current.markers = newMarkers;
					});
					this.dataDom.push(
						<div
							className={classes.DestinationItem}
							address={element["cn-map"].address}
							lat={element["cn-map"].lat}
							lng={element["cn-map"].lng}
							key={index}
						>
							<input
								className={classes.Checkbox}
								lat={element["cn-map"].lat}
								lng={element["cn-map"].lng}
								type="checkbox"
								onClick={() => this.checkMarkerHandler(index)}
							/>
							<span className={classes.Text}>
								{element.title.rendered}
							</span>
						</div>
					);
				});
				this.setState({
					destionationsList: this.dataDom
				});
			});
	}

	checkMarkerHandler(i) {
		const newMarker = [...this.state.markers];
		newMarker[i].checked = !newMarker[i].checked;
		this.setState({
			markers: newMarker,
		});
	}

	render() {
		return (
			<div>
				<div className={classes.BoxContainer}>
					<div className={classes.DestinationsList}>
						<div className={classes.ListHeader}>
							Seleccionar Destino
						</div>
						{this.state.destionationsList}
					</div>
					<MapContainer markers={this.state.markers} />
				</div>
			</div>
		);
	}
}

export default DestinationsBox;
