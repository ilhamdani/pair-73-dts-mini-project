import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/original";
const apiKey = "api_key=93dcc8cc43ebbf328e1a0870075ff02a";

const getMovieList = (url) => {
  return axios.get(`${baseURL}${url}${apiKey}`).then((response) => {
    return response.data;
  });
};

const getMovieDetail = (url, id) => {
  return axios.get(`${baseURL}${url}${id}?${apiKey}`).then((response) => {
    return response.data;
  });
};

const getCarouselImage = () => {
  return imgUrl;
}

const path = {
  popular: getMovieList("movie/popular?"),
  series: getMovieList("tv/popular?"),
  genres: getMovieList("tv/popular?"),
  trending: getMovieList("trending/all/day?"),
  getMovieDetail,
  getCarousel: getCarouselImage(),
};

export default path;