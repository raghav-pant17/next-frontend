import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./CarouselDesign.css";
import image from "./banner-image-41.4-01-1000x491.png";

import Box from "@mui/material/Box";

const style = {
  top: "50%",
  left: "50%",
  // transform: 'translate(-50%, -50%)',
  bgcolor: "background.paper",
  boxShadow: 10,
  borderRadius: 5,
  p: 4,
  backgroundColor: "#9EDDFF",
  // zIndex: -1,
};

const packages = [
  {
    id: "silver",
    name: "SILVER PLAN",
    price: "@199 ONLY",
    description: "Basic Features",
    img: "./images/Silver.jpg",
  },
  {
    id: "gold",
    name: "GOLD PLAN",
    price: "@399 ONLY",
    description: "Value for money",
    img: "./images/Gold.jpg",
  },
  {
    id: "platinum",
    name: "PLATINUM PLAN",
    price: "@799 ONLY",
    description: "Ultra max package",
    img: "./images/Platinum.jpg",
  },
];

// import './PackageCarousel.css'; // Import the CSS file

const CarouselDesign = () => {
  return (
    <>
      <Box sx={style}>
        <div className="carousel-container">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {packages.map((pkg, index) => (
              <Link to={`/${pkg.id}`} style={{ textDecoration: "none" }}>
                {console.log(pkg.img)}
                <div className="cardStyle">
                  <div key={index} className="package-slide">
                    {/* <h2>{pkg.id}</h2> */}
                    <h2>{pkg.name}</h2>
                    <h3>{pkg.price}</h3>
                    <h4>{pkg.description}</h4>

                    <Link to={`/${pkg.id}`}>
                      <button class="btn btn-outline-dark">See More</button>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </Box>
    </>
  );
};

export default CarouselDesign;
