import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, loading }) => {
  if (loading) {
    return (
      <ul className="movies">
        {Array.apply(null, Array(5)).map(() => (
          <li className="load-wraper">
            <div className="activity"></div>
          </li>
        ))}
        ;
      </ul>
    );
  }
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
