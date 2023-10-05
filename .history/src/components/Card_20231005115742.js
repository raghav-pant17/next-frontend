import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
  
// );

export default function OutlinedCard(props) {
    console.log(props)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined"><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        &#8377;{props.planPrice}
      </Typography>
      <Typography variant="h5" component="div">
        {props.planName}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.planDetails}
      </Typography>
      <Typography variant="body2">
       
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" >Upgrade Now</Button>
    </CardActions>
  </React.Fragment></Card>
    </Box>
  );
}
