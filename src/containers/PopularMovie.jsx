import MovieList from "../components/MovieList";
import api from "../api/api.js";
import React, { useState, useEffect } from "react";

function PopularMovie() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.popular.then((response) => {
      setPost(response.results);
    });
  }, []);
  return <MovieList movieList={post} title="Popular Movies" />;
}

export default PopularMovie;
