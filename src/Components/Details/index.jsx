import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../Utils/utilities';
import "./det.css";
const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="head">Movie Details</h1>
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="images" />
      <div className="detailed">
        <h2>Movie Name: {movie.title}</h2>
        <p>Genre: {movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
