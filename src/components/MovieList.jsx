import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";

function MovieList(genreId) {
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
  return <div>MovieList</div>;
}

export default MovieList;
