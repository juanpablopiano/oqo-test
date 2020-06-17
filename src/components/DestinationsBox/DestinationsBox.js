import React, { Component } from "react";
import classes from "./DestinationsBox.module.css";
import axios from 'axios';

/* componentes */
import MapContainer from "./MapContainer/MapContainer";

class DestinationsBox extends Component {
	state = {
		destionationsList: [],
		data: [],
	};
	dataList = [];
	dataDom = [];

	componentDidMount() {
		axios
			.get(
				/* "https://cors-anywhere.herokuapp.com/http://suzukimotos.cl/wp-json/wp/v2/concesionarios" */
				"http://localhost:8000/api/concesionarios"
			)
			.then(async (response) => {
				await this.dataList.push(...response.data);
				await this.dataList.forEach((element, index) => {
					this.dataDom.push(
						<div
							address={element["cn-map"].address}
							lat={element["cn-map"].lat}
							lng={element["cn-map"].lng}
							key={index}
							name={element.title.rendered}
						></div>
					);
				});
				this.setState({
					destionationsList: this.dataDom,
					data: this.dataList,
				});
			});
	}

	render() {
		return (
			<div>
				<div className={classes.BoxContainer}>
					<div className={classes.DestinationsList}>
                        {this.state.destionationsList}
                    </div>
					<MapContainer />
				</div>
			</div>
		);
	}
}

export default DestinationsBox;
