import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import MovieCard from "./MovieCard";

function MovieList(genreId, index_) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-4 px-3 pb-4">
      {movieList.map((item, index) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
