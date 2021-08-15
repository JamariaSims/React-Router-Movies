import React from "react";
import { Link } from "react-router-dom";

export default function SavedList(props) {
	return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			<nav>
				{props.list.map((movie) => (
					<Link to={`/movies/${movie.id}`} key={movie.id} movie={movie}>
						<ol className="saved-movie">{movie.title}</ol>
					</Link>
				))}
			</nav>
			<Link to="/">
				<div className="home-button">Home</div>
			</Link>
		</div>
	);
}
