import React, { useState, useEffect } from "react";
import api from "../api/api.js";
import { Carousel } from "react-carousel-minimal";

function CarouselImage() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.trending.then((response) => {
      setPost(response.results);
    });
  }, []);

  const images = post.map((item) => [item.backdrop_path]);
  const title = post.map((item) => [item.title]);

  const data = [
    {
      image: `${api.getCarousel}${images[1]}`,
      title: title[1],
    },
    {
      image: `${api.getCarousel}${images[3]}`,
      title: title[3],
    },
    {
      image: `${api.getCarousel}${images[2]}`,
      title: title[2],
    },
  ];

  const captionStyle = {
    fontSize: "2em",
  };

  return (
    <div className="bg-neutral-900">
      <Carousel
        slideBackgroundColor="black"
        data={data}
        width="100%"
        height="720px"
        captionStyle={captionStyle}
        radius="4px"
        captionPosition="bottom"
        dots={true}
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "30%",
        }}
      />
    </div>
  );
}

export default CarouselImage;