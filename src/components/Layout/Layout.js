import React from "react";
import classes from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={classes.Container}>
			<div className={classes.ImgContainer}>
				<img className={classes.BigImage} alt="" src="recurso1.png" />
			</div>

			<div className={classes.Text}>
				Inscribete en TurClub, obtén beneficios especiales, descuentos y
				mucho más!
			</div>
			<a href="/">
				<button className={classes.Button}>Ir a TurClub</button>
			</a>
			<div className={classes.Text2}>
				Nuestros destinos en el programa de viajero frecuente
			</div>
		</div>
	);
};

export default Layout;
