import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Card = props => {
	const ROUTE = "/" + props.route + "/" + props.id;
	const { store, actions } = useContext(Context);

	const favData = {
		url: ROUTE,
		label: props.title
	};

	// Verifica si ya está en favoritos
	const isFavorite = store.favs.some(fav => fav.url === favData.url);

	// Función para alternar favorito
	const toggleFav = () => {
		if (isFavorite) {
			actions.deleteFav(favData.url);
		} else {
			actions.addFav(favData);
		}
	};

	return (
		<div className="card mr-5 ml-3 mb-2 w-25">
			<img
				className="card-img-top"
				src="https://i.blogs.es/8dd90a/galaxyedge/1366_2000.jpeg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title text-dark text-left">{props.title}</h5>
				<p className="card-text text-secondary text-left">{props.description}</p>
				<Link to={ROUTE}>
					<button className="btn btn-outline-primary float-left">Ver más</button>
				</Link>
				<button
					className="btn btn-outline-warning float-right"
					onClick={toggleFav}
				>
					{isFavorite ? "❤️" : "🤍"}
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	route: PropTypes.string,
	id: PropTypes.string
};

export default Card;