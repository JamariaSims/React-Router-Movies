import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";
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
	};

	return (
		<Router>
			<div>
				<SavedList
					list={
						[
							/* This is stretch */
						]
					}
				/>
				<Route exact path="/" component={"MovieList"}>
					<MovieList movies={movieList} />
				</Route>
				<Route path="/movies/:id">
					<Movie />
				</Route>
			</div>
		</Router>
	);
}
