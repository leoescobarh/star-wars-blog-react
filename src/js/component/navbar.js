import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
			</Link>
			<div className="ml-auto dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favoritos <span className="badge bg-light text-dark">{store.favs.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favs.length === 0 ? (
						<li className="dropdown-item">No hay favoritos</li>
					) : (
						store.favs.map((fav, index) => (
							<li
								key={index}
								className="dropdown-item d-flex justify-content-between align-items-center"
							>
								<Link to={fav.url} className="text-decoration-none text-dark">
									{fav.label}
								</Link>
								<button
									className="btn btn-sm btn-danger ms-2"
									onClick={() => actions.deleteFav(fav.url)}
								>
									X
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};