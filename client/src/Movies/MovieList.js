import React from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "./Movie";

export default function MovieList(props) {
	return (
		<div className="movie-list">
			{props.movies.map((movie) => (
				<MovieDetails key={movie.id} movie={movie} />
			))}
		</div>
	);
}

function MovieDetails(props) {
	const { title, director, metascore, key } = props.movie;
	const params = useParams();
	return (
		<div
			className="movie-card"
			onClick={(e) => {
				console.log(props.movie);
				return <Link to={`/movies/${key}`} />;
			}}
		>
			<h2>{title}</h2>
			<Link to={`/movies/$${key}`} />
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
		</div>
	);
}
