import MovieList from "../components/MovieList";
import api from "../api/api.js";
import React, { useState, useEffect } from "react";

function Trending() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.trending.then((response) => {
      setPost(response.results);
    });
  }, []);
  return <MovieList movieList={post} title="Trending Now" />;
}

export default Trending;
