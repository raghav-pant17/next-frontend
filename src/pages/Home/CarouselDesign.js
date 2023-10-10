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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./CarouselDesign.css";
import image from "./banner-image-41.4-01-1000x491.png";

import Box from "@mui/material/Box";

const style = {
  top: "50%",
  left: "50%",
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



const CarouselDesign = () => {
  return (
    <>
      <Box sx={style} style={{backgroundColor: 'transparent' }}>
        <div className="carousel-container c" >
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {packages.map((pkg, index) => (
              <Link to={`/${pkg.id}`} style={{ textDecoration: "none" }}>
                {console.log(pkg.img)}
                <div className="cardStyle">
                  <div key={index} className="package-slide">
                    <div className="package-info">
                    <h2 className="head">{pkg.name}</h2>
                    <h3 className="head">{pkg.price}</h3>
                    <h4 className="head">{pkg.description}</h4>
                    </div>
                    

                    <Link to={`/${pkg.id}`}>
                      <button className="see-more btn btn-danger">See More</button>
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
