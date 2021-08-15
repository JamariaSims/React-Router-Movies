import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList(props) {
	return <MovieCard movies={props.movies} />;
}
