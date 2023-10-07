import React, {useEffect } from "react";
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
import './CarouselDesign.css';
import axios from 'axios';




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

  const [planDetails,setPlanDetails] = useState([]);

  useEffect(()=>{
    const result = axios.get("http://localhost:8080/api/customer/allPlans").then((result) => {
      setPlanDetails(result.data);
      console.log(result.data);
    })},[])

  return (
    <>
      <Box sx={style}>
        <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
            {planDetails.map((plan, index) => (
              <Link to={`/plan/${plan.id}`} style={{ textDecoration: "none" }}>
                
                <div className="cardStyle">
                  <div key={index} className="package-slide">


            {/* <h2>{pkg.id}</h2> */}
            <h2 style={{color: 'white'}}>{(plan.name).toUpperCase()}</h2><br />
            <h3 style={{color: 'white'}}>@{plan.price}/ Month</h3><br />
            <h4 style={{color: 'white'}}>{plan.description}</h4>          
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
