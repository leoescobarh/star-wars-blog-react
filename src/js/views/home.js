import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import List from "../component/List";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<List title="Personajes" list={store.people} route="people"></List>
			<List title="Planetas" list={store.planets} route="planets"></List>
		</div>
	);
};
