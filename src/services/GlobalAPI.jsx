import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4a0a1d61ff1ee83055a4d673d9a3e5e9";

// Trending Videos
const getTrendingVideos = axios.get(
  this.movieBaseUrl + "/trending/all/day?api_key" + api_key
);
export default {
  getTrendingVideos,
};
