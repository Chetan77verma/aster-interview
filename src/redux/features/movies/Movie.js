import React from "react";

const Movie = ({ movie }) => {
  return (
    <li
      style={{
        background: `linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 72.27%), url(${`https://image.tmdb.org/t/p/w500${movie.poster_path}`}`,
      }}
      className="movie-card"
    >
      <div className="info">
        <h2>{movie.title}</h2>
        <p>
          Released On{" "}
          {new Date(movie.release_date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="overview">{movie.overview}</p>
        <h3>Watch Now <i className="arrow-right"></i></h3>
      </div>
    </li>
  );
};

export default Movie;
