import React from "react";
import { Link } from "react-router-dom";
import api from "../api/api.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

function MovieList({ movieList, title }) {
  return (
    <>
      <h1 className="text-lg ml-28 m-4 px-4">{title}</h1>
      <Grid sx={{ flexGrow: 1}} container justifyContent='center' spacing={2} >
      {movieList ? movieList.map((item, index) => (

        <Grid item xs={2} key={item.id}>
          <Grid container spacing={2}>
            <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <Link to="/detail" state={{ from: item.id }}>
                    <CardMedia
                      component="img"
                      height="270"
                      image={`${api.getCarousel}/${item.poster_path}`}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title} {item.name}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea> 
            </Card>
            </Grid>
          </Grid>
          )) : ""}
      </Grid>
    </>
  );
}

export default MovieList;
