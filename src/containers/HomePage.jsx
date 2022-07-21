import React from "react";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../authentications/firebase";
import CarouselImage from "../components/CarouselImage";
import PopularMovie from "./PopularMovie";
import Trending from "./Trending";
import Series from "./Series";

const HomePage = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="flex flex-col">
        <CarouselImage />
        <Trending />
        <PopularMovie />
        <Series />
      </div>
    </>
  );
};

export default HomePage;
