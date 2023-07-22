import React from "react";
import GenreList from "../constants/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="p-8 px-8 md:px-16">
      {GenreList.genre.map(
        (item, index) =>
          index <= 3 && (
            <div>
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
