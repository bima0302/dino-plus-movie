import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4a0a1d61ff1ee83055a4d673d9a3e5e9";

// Genre Videos
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=4a0a1d61ff1ee83055a4d673d9a3e5e9";

// Trending Videos
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
export default {
  getTrendingVideos,
  getMovieByGenreId,
};
