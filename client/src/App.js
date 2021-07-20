import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
	const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
	const [movieList, setMovieList] = useState([]);
	// const { path, url } = useRouteMatch();

	useEffect(() => {
		const getMovies = () => {
			axios
				.get("http://localhost:5000/api/movies")
				// Study this endpoint with Postman
				// Study this response with a breakpoint or log statements
				// and set the response data as the 'movieList' slice of state
				.then((response) => {
					setMovieList(response.data);
				})
				.catch((error) => {
					console.error("Server Error", error);
				});
		};
		getMovies();
	}, []);

	const addToSavedList = (id) => {
		// This is stretch. Prevent the same movie from being "saved" more than once
		// setSaved(...saved, id);
		movieList.find((movie) => movie.id === id);
		if (!saved.includes(movieList.find((movie) => movie.id == id))) {
			setSaved([...saved, movieList.find((movie) => movie.id == id)]);
		}
	};

	return (
		<Router>
			<div>
				<SavedList list={saved} />
				<Switch>
					<Route exact path="/">
						<MovieList movies={movieList} />
					</Route>
					<Route path="/movies/:id">
						<Movie add={addToSavedList} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
