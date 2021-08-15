import React from "react";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
	const { movies } = props;
	return (
		<div>
			{movies.map((movie) => {
				return (
					<Link to={`/movies/${movie.id}`} key={movie.id} movie={movie}>
						<div className="movie-list">
							<div className="movie-card">
								<h2>{movie.title}</h2>
								<div className="movie-director">
									Director: <em>{movie.director}</em>
								</div>
								<div className="movie-metascore">
									Metascore: <strong>{movie.metascore}</strong>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
