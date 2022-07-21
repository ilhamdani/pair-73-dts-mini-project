import MovieList from "../components/MovieList";
import api from "../api/api.js";
import React, { useState, useEffect } from "react";

function Series() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.series.then((response) => {
      setPost(response.results);
    });
  }, []);
  return <MovieList movieList={post} title="TV Series" />;
}

export default Series;
