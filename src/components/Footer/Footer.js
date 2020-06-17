import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
	return (
		<div className={classes.Footer} fixed="bottom">
			<div className={classes.Content}>
				<img src="/turbus2.png" alt="turbus-icon" width="150px" height="40px"></img>
				<div className={classes.Txt}>
					Empresa de Transportes Rurales Ltda.
				</div>
				<div className={classes.Txt}>
					<div className={classes.TextContainer}>
						<i className="fa fa-map-marker"></i>
						<span>
							Dirección: Jesús Diez Martínez 800, Estación
							Central, Santiago de Chile.
						</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<i className="fa fa-mobile"></i>
						<span>Teléfono 228227500</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<i className="fa fa-envelope"></i>
						<span>Email: atencion_clientes@turbus.cl</span>
					</div>
				</div>
			</div>
			<div className={classes.Content}>
				<div height="40px">&nbsp;</div>
				<div className={classes.Txt}>Más sobre Tur Bus Ltda.</div>
				<div className={classes.Txt}>
					<div className={classes.TextContainer}>
						<span>Historia</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<span>Trabaja con nosotros</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<span>Condiciones</span>
					</div>
				</div>
			</div>
			<div className={classes.Content}>
				<div height="40px">&nbsp;</div>
				<div className={classes.Txt}>Más sobre Tur Bus Ltda.</div>
				<div className={classes.Txt}>
					<div className={classes.TextContainer}>
						<span>Venta de pasajes</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<span>Aeropuerto</span>
					</div>
					<br />
					<div className={classes.TextContainer}>
						<span>Arriendo de buses</span>
					</div>
					<div className={classes.TextContainer}>
						<span>Recarga de celular</span>
					</div>
					<div className={classes.TextContainer}>
						<span>Venta de buses</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default footer;
