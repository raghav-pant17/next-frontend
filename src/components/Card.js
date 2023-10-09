import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";

let style = { display: "inline-block", mx: "2px", transform: "scale(0.8)" };
const bull = (
  <Box component="span" sx={style}>
    •
  </Box>
);

export default function OutlinedCard(props) {
  console.log(props);
  return (
    <Box sx={{ minWidth: 275  }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              &#8377;{props.planPrice}
            </Typography>
            <Typography variant="h5" component="div">
              {props.planName.toUpperCase()}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.planDetails.toUpperCase()}
            </Typography>
            <Typography variant="body2">
              <br />
            </Typography>
          </CardContent>
          <button className="btn btn-warning"  onClick={() => props.changePlan(props.planName)}>
            Change Plan to {props.planName.toUpperCase()}
          </button>
        </React.Fragment>
      </Card>
    </Box>
  );
}
