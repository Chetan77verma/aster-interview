import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getMoviesAsync, searchMoviesAsync } from "./moviesSlice";

import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, data: movies, error } = useSelector((state) => state.movies);

  console.log("loading", loading);

  console.log("movies", movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!searchTerm) {
      dispatch(getMoviesAsync());
      return;
    }
    dispatch(searchMoviesAsync({ searchTerm }));
  };



  return (
    <div className="container">
      <p className="search-heading">Search for movies, Series, TV shows</p>
      <div className="search-bar">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
          autoFocus
        />
      </div>
      <h3>
        Trending Now <i className="arrow-right"></i>
      </h3>
      <MovieList loading={loading} movies={movies} />
    </div>
  );
}

export default Movies;
